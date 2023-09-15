<!--suppress ALL -->
<template>
  <the-content-wrapper class="stepThreeWrapper">
    <the-validation-errors ref="validationErrors" class="stepThreeValidationErrors"></the-validation-errors>
    <the-progress-bar :point-three="true"></the-progress-bar>
    <the-text-area-field
      :placeholder="placeholder"
      :tip-content="tip"
      :apply-tip="true"
      :apply-title="true"
      @input="updateValue">
      <template v-slot:title>About</template>
    </the-text-area-field>
    <div class="stepThreeButtonsWrapper">
      <the-back-button @click="goBack"><template v-slot:text>Назад</template></the-back-button>
      <the-next-button @click="sendForm" class="sendButton"><template v-slot:text>Отправить</template></the-next-button>
    </div>
  </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheValidationErrors from '@/components/generalComponents/TheValidationErrors'
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheTextAreaField from '@/components/generalComponents/TheTextAreaField'
import TheBackButton from '@/components/generalComponents/TheBackButton'
import TheNextButton from '@/components/generalComponents/TheNextButton'
import router from '@/main'
export default {
  name: 'TheStepThreePage',
  data () {
    return {
      tip: 'Максимальная длина 250 символов',
      placeholder: 'Placeholder',
      inputValue: this.$store.getters.ABOUT
    }
  },
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-validation-errors': TheValidationErrors,
    'the-progress-bar': TheProgressBar,
    'the-text-area-field': TheTextAreaField,
    'the-next-button': TheNextButton,
    'the-back-button': TheBackButton
  },
  computed: {
    updateCounter (counter) {
      return this.charsCounter
    }
  },
  methods: {
    updateValue () {
      this.inputValue = event.target.value
    },
    sendForm () {
      const greetingsErrors = this.$refs.validationErrors
      greetingsErrors.errors = []
      let errorFlag = false
      if (this.inputValue.length === 0 || this.inputValue === '') {
        greetingsErrors.errors.push('Заполните поле About')
        errorFlag = true
      }
      if (greetingsErrors.errors.length === 0 && !errorFlag) {
        event.preventDefault()
        this.$store.dispatch('SET_ABOUT', this.inputValue)
        router.push('/dataFromStore')
      }
    },
    goBack () {
      router.push('/greetings/step1/step2')
    }
  }
}
</script>

<style scoped>
.stepThreeWrapper{
  padding: 62px 110px;
  height: 550px;
}
.stepThreeButtonsWrapper{
  display: flex;
  width: 692px;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 80px;
}
.sendButton{
  width: 103px;
}
.stepThreeValidationErrors{
  margin-left: 810px;
  margin-top: -40px;
}
</style>
