<!--suppress ALL -->
<template>
<the-content-wrapper class="stepTwoWrapper" :style="wrapperHeight">
  <the-progress-bar :point-two="true"></the-progress-bar>
    <the-input-field :placeholder="placeholder" :apply-delete="true" :type="'input'" :input-width="inputWidth" :bg-color="bgColor" :apply-title="true" @input="necessaryInputDataUpdate">
      <template v-slot:title>Advantages</template>
    </the-input-field>
  <div class="stepTwoInputsWrapper" v-for="(component, index) in addedInputs" :key="index">
    <the-input-field :component-id="index" @delete="deleteComponent" :placeholder="placeholder" :apply-delete="true" :type="'input'" :input-width="inputWidth" :bg-color="bgColor" @input="updateInputsValues(index)"></the-input-field>
  </div>
  <the-add-button @click="addComponent">
    <template v-slot:text>+</template>
  </the-add-button>
  <the-check-box-group :apply-title="true" @input="updateCheckboxesValues" @update:checkBoxOne="updateCheckBoxOne" @update:checkBoxTwo="updateCheckBoxTwo" @update:checkBoxThree="updateCheckBoxThree">
    <template v-slot:title>Checkbox group</template>
  </the-check-box-group>
  <div class="stepTwoButtonsWrapper">
    <the-back-button id="button-back"><template v-slot:text>Назад</template></the-back-button>
    <the-next-button id="button-next"><template v-slot:text>Далее</template></the-next-button>
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
export default {
  name: 'StepTwoPage',
  data () {
    return {
      placeholder: 'Placeholder',
      bgColor: '#FFFFFF',
      inputWidth: '300px',
      necessaryInputData: '',
      addedInputs: [],
      addedInputsValues: [],
      checkBoxOne: Boolean,
      checkBoxTwo: Boolean,
      checkBoxThree: Boolean
    }
  },
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField,
    'the-add-button': TheAddButton,
    'the-check-box-group': TheCheckBoxGroup,
    'the-back-button': TheBackButton,
    'the-next-button': TheNextButton
  },
  methods: {
    addComponent () {
      this.addedInputs.push({})
      this.addedInputsValues.push('')
    },
    deleteComponent (index) {
      document.getElementById(index).remove()
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
    }
  },
  computed: {
    wrapperHeight () {
      const componentHeight = 44
      const componentCount = this.addedInputs.length
      const minHeight = 800
      const totalHeight = minHeight + (componentCount * componentHeight)
      return {
        height: `${totalHeight}px`
      }
    }
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
</style>
