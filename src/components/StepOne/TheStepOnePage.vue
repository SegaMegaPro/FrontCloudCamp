<!--suppress ALL -->
<template>
  <the-content-wrapper class="stepOneWrapper">
    <the-validation-errors ref="validationErrors" class="stepOneValidationErrors"></the-validation-errors>
    <the-progress-bar :point-one="true" ref="stepOneProgressBar"></the-progress-bar>
    <the-input-field id="field-nickname" class="stepOneInputs"
                     :placeholder="placeholder"
                     :bg-color="bgColor"
                     :input-width="inputWidth"
                     :apply-tip="true"
                     :apply-title="true"
                     :tip-content="nicknameTip"
                     @input="updateNickname" >
      <template v-slot:title>Nickname</template>
    </the-input-field>
    <the-input-field id="field-name" class="stepOneInputs"
                     :placeholder="placeholder"
                     :bg-color="bgColor"
                     :input-width="inputWidth"
                     :apply-tip="true"
                     :apply-title="true"
                     :tip-content="nameTip"
                     @input="updateName">
      <template v-slot:title>Name</template>
    </the-input-field>
    <the-input-field id="field-surname" class="stepOneInputs"
                     :placeholder="placeholder"
                     :bg-color="bgColor"
                     :input-width="inputWidth"
                     :apply-tip="true"
                     :apply-title="true"
                     :tip-content="surnameTip"
                     @input="updateSurname">
      <template v-slot:title>Surname</template>
    </the-input-field>
    <the-select-field id="field-sex" class="stepOneInputs"
                      :bg-color = "bgColor"
                      :apply-title="true"
                      :placeholder="placeholder"
                      @input="updateSex">
      <template v-slot:title>Sex</template>
    </the-select-field>
    <div class="stepOneButtonsWrapper">
      <the-back-button id="button-back" @click="goBack"><template v-slot:text>Назад</template></the-back-button>
      <the-next-button id="button-next" @click="goToStepTwo"><template v-slot:text>Далее</template></the-next-button>
    </div>
  </the-content-wrapper>
</template>

<script>
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheInputField from '@/components/generalComponents/TheInputField'
import TheSelectField from '@/components/generalComponents/TheSelectField'
import TheNextButton from '@/components/generalComponents/TheNextButton'
import TheBackButton from '@/components/generalComponents/TheBackButton'
import TheValidationErrors from '@/components/generalComponents/TheValidationErrors'
import router from '@/main'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'TheStepOnePage',
  components: {
    'the-validation-errors': TheValidationErrors,
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField,
    'the-select-field': TheSelectField,
    'the-next-button': TheNextButton,
    'the-back-button': TheBackButton
  },
  data () {
    return {
      placeholder: 'Placeholder',
      bgColor: '#FFFFFF',
      inputWidth: '300px',
      nicknameTip: 'Не больше 30 символов, можно использовать буквы и цифры (спец. символы запрещены)',
      nameTip: 'Не больше 50 символов, только буквы',
      surnameTip: 'Не больше 50 символов, только буквы',
      applySearchable: false,
      nickname: this.$store.getters.NICKNAME,
      name: this.$store.getters.NAME,
      surname: this.$store.getters.SURNAME,
      sex: this.$store.getters.SEX
    }
  },
  methods: {
    ...mapMutations(['SET_NICKNAME', 'SET_NAME', 'SET_SURNAME', 'SET_SEX']),
    goToStepTwo () {
      const greetingsErrors = this.$refs.validationErrors
      greetingsErrors.errors = []
      let errorFlag = false
      if (this.validateNickName() || this.nickname === undefined) {
        greetingsErrors.errors.push('Некорректный никнейм')
        errorFlag = true
      }
      if (this.validateName() || this.name === undefined) {
        greetingsErrors.errors.push('Некорректное имя')
        errorFlag = true
      }
      if (this.validateSurname() || this.surname === undefined) {
        greetingsErrors.errors.push('Некорректная фамилия')
        errorFlag = true
      }
      if (this.validateSex() || this.sex === undefined) {
        greetingsErrors.errors.push('Некорректный пол')
        errorFlag = true
      }
      if (greetingsErrors.errors.length === 0 && !errorFlag) {
        event.preventDefault()
        this.$store.dispatch('SET_NICKNAME', this.nickname)
        this.$store.dispatch('SET_NAME', this.name)
        this.$store.dispatch('SET_SURNAME', this.surname)
        this.$store.dispatch('SET_SEX', this.sex)
        router.push('/step1/step2')
      }
    },
    updateNickname () {
      this.nickname = event.target.value
    },
    updateName () {
      this.name = event.target.value
    },
    updateSurname () {
      this.surname = event.target.value
    },
    updateSex (value) {
      this.sex = value
    },
    validateNickName () {
      const nickNameREGEXP = /^[a-zA-Zа-яА-ЯёЁ0-9]{1,30}$/
      return !nickNameREGEXP.test(this.nickname)
    },
    validateName () {
      const nameREGEXP = /^[a-zA-Zа-яА-ЯёЁ]{1,50}$/
      return !nameREGEXP.test(this.name)
    },
    validateSurname () {
      const surnameREGEXP = /^[a-zA-Zа-яА-ЯёЁ]{1,50}$/
      return !surnameREGEXP.test(this.surname)
    },
    validateSex () {
      if (this.sex) {
        return (this.sex === '' || this.sex.length === 0 || this.sex === null)
      }
    },
    goBack () {
      router.push('/greetings')
    }
  },
  computed: {
    ...mapState(['nicknameData', 'nameData', 'surnameData', 'sexData'])
  }
}
</script>

<style scoped>
.stepOneWrapper{
  height: 821px;
  padding: 62px 110px;
}
.stepOneButtonsWrapper{
  display: flex;
  width: 692px;
  justify-content: space-between;
}
.stepOneValidationErrors{
  margin-left: 820px;
}
.stepOneInputs{
  width: 300px;
  margin-bottom: -8px;
}
</style>
