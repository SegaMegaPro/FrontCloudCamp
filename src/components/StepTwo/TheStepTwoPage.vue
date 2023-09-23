<!--suppress ALL -->
<template>
<the-content-wrapper class="stepTwoWrapper" :style="wrapperHeight">
  <the-validation-errors ref="validationErrors" class="stepTwoValidationErrors"></the-validation-errors>
  <the-progress-bar :point-two="true"></the-progress-bar>
    <the-input-field
      :placeholder="placeholder"
      :apply-delete="true"
      :type="'input'"
      :input-width="inputWidth"
      :bg-color="bgColor"
      :apply-title="true"
      @input="necessaryInputDataUpdate">
      <template v-slot:title>Advantages</template>
    </the-input-field>
  <div class="stepTwoInputsWrapper" v-for="(component, index) in addedInputs" :key="index">
    <the-input-field
      :component-id="index"
      @delete="deleteComponent"
      :placeholder="placeholder"
      :apply-delete="true"
      :input-width="inputWidth"
      :bg-color="bgColor"
      @input="updateInputsValues(index)">
    </the-input-field>
  </div>
  <the-add-button @click="addComponent">
    <template v-slot:text>+</template>
  </the-add-button>
  <the-check-box-group
    :apply-title="true"
    @input="updateCheckboxesValues"
    @update:checkBoxOne="updateCheckBoxOne"
    @update:checkBoxTwo="updateCheckBoxTwo"
    @update:checkBoxThree="updateCheckBoxThree">
    <template v-slot:title>Checkbox group</template>
  </the-check-box-group>
  <the-radio-button-group
    :apply-title="true"
    @update="updateRadioButtonValue"
    v-model="radioButtonValue">
    <template v-slot:title>Radiobuttons group</template>
  </the-radio-button-group>
  <div class="stepTwoButtonsWrapper">
    <the-back-button id="button-back" @click="goBack"><template v-slot:text>Назад</template></the-back-button>
    <the-next-button id="button-next" @click="goToStepThree"><template v-slot:text>Далее</template></the-next-button>
  </div>
  </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheInputField from '@/components/generalComponents/TheInputField'
import TheAddButton from '@/components/generalComponents/TheAddButton'
import TheBackButton from '@/components/generalComponents/TheBackButton'
import TheNextButton from '@/components/generalComponents/TheNextButton'
import TheCheckBoxGroup from '@/components/generalComponents/TheCheckBoxGroup'
import TheRadioButtonGroup from '@/components/generalComponents/TheRadioButtonGroup'
import TheValidationErrors from '@/components/generalComponents/TheValidationErrors'
import router from '@/main'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'StepTwoPage',
  data () {
    return {
      placeholder: 'Placeholder',
      bgColor: '#FFFFFF',
      inputWidth: '300px',
      necessaryInputData: this.$store.getters.NECESSARY_ADV,
      addedInputs: [],
      addedInputsValues: [],
      checkBoxOne: Boolean(),
      checkBoxTwo: Boolean(),
      checkBoxThree: Boolean(),
      radioButtonValue: this.$store.getters.RADIO_BUTTON_DATA
    }
  },
  components: {
    'the-validation-errors': TheValidationErrors,
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField,
    'the-add-button': TheAddButton,
    'the-check-box-group': TheCheckBoxGroup,
    'the-radio-button-group': TheRadioButtonGroup,
    'the-back-button': TheBackButton,
    'the-next-button': TheNextButton
  },
  methods: {
    ...mapMutations(['SET_NECESSARY_ADV_DATA', 'SET_ADDED_ADV_DATA', 'SET_CHECK_BOXES_DATA', 'SET_RADIO_BUTTON_DATA']),
    addComponent () {
      this.addedInputs.push({})
      this.addedInputsValues.push('')
    },
    deleteComponent (index) {
      document.getElementById(index).remove()
      this.addedInputs.splice(index, 1)
      this.addedInputsValues.splice(index, 1)
    },
    updateInputsValues (index) {
      this.addedInputsValues[index] = event.target.value
    },
    necessaryInputDataUpdate () {
      this.necessaryInputData = event.target.value
    },
    updateCheckBoxOne () {
      if (this.checkBoxOne === true) {
        this.checkBoxOne = false
      } else {
        this.checkBoxOne = true
      }
    },
    updateCheckBoxTwo () {
      if (this.checkBoxTwo === true) {
        this.checkBoxTwo = false
      } else {
        this.checkBoxTwo = true
      }
    },
    updateCheckBoxThree () {
      if (this.checkBoxThree === true) {
        this.checkBoxThree = false
      } else {
        this.checkBoxThree = true
      }
    },
    updateRadioButtonValue () {
      this.radioButtonValue = event.target.value
    },
    validateNecessaryAdvantage () {
      return (this.necessaryInputData === '' || this.necessaryInputData.length === 0 || this.necessaryInputData === null)
    },
    validateAddedAdvantages () {
      let errorFlag = false
      if (this.addedInputsValues.length !== 0) {
        for (let i = 0; i < this.addedInputsValues.length; i++) {
          if (this.addedInputsValues[i] === '' || this.addedInputsValues[i] === null || this.addedInputsValues[i] === undefined) {
            errorFlag = true
          }
        }
      }
      return errorFlag
    },
    validateRadiobuttons () {
      return (this.radioButtonValue === '' || this.radioButtonValue.length === 0 || this.radioButtonValue === null)
    },
    goToStepThree () {
      const greetingsErrors = this.$refs.validationErrors
      greetingsErrors.errors = []
      let errorFlag = false
      if (this.validateNecessaryAdvantage()) {
        greetingsErrors.errors.push('Заполните хотя бы одно поле Advantage')
        errorFlag = true
      }
      if (this.validateRadiobuttons()) {
        greetingsErrors.errors.push('Выберите одну из радиокнопок')
        errorFlag = true
      }
      if (this.validateAddedAdvantages()) {
        greetingsErrors.errors.push('Заполните добавленные Advantage-поля, либо удалите лишние')
        errorFlag = true
      }
      if (greetingsErrors.errors.length === 0 && !errorFlag) {
        event.preventDefault()
        this.$store.dispatch('SET_NECESSARY_ADV_DATA', this.necessaryInputData)
        this.$store.dispatch('SET_ADDED_ADV_DATA', this.addedInputsValues)
        this.$store.dispatch('SET_CHECK_BOXES_DATA', [this.checkBoxOne, this.checkBoxTwo, this.checkBoxThree])
        this.$store.dispatch('SET_RADIO_BUTTON_DATA', this.radioButtonValue)
        router.push('/step1/step2/step3')
      }
    },
    goBack () {
      router.push('/step1')
    }
  },
  computed: {
    wrapperHeight () {
      const componentHeight = 44
      const componentCount = this.addedInputs.length
      const minHeight = 712
      const totalHeight = minHeight + (componentCount * componentHeight)
      return {
        height: `${totalHeight}px`
      }
    },
    ...mapState(['necessaryAdvantageData', 'addedAdvantagesData', 'checkBoxesData', 'radioButtonData'])
  }
}
</script>

<style scoped>
.stepTwoWrapper{
  padding: 62px 110px;
}
.stepTwoInputsWrapper{
  display: flex;
  justify-content: space-between;
}
.stepTwoButtonsWrapper{
  display: flex;
  width: 692px;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 80px;
}
.stepTwoValidationErrors{
  margin-left: 810px
}
</style>
