<template>
    <the-content-wrapper>
      <the-validation-errors ref="validationErrors"></the-validation-errors>
      <the-greetings-header></the-greetings-header>
      <form @submit.prevent="goToStepOne">
        <the-input-field class="greetingsInput" id="field-phone" :placeholder="phonePlaceholder" @input="updatePhone" :apply-phone-mask="true">
          <template v-slot:title>Номер телефона</template>
        </the-input-field>
        <the-input-field class="greetingsInput" id="field-email" :placeholder="emailPlaceholder" @input="updateEmail">
          <template v-slot:title>Email</template>
        </the-input-field>
        <the-next-button id="button-start" @click="goToStepOne" type="submit">
          <template v-slot:text>Начать</template>
        </the-next-button>
      </form>
    </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheGreetingsHeader from '@/components/generalComponents/TheGreetingsHeader'
import TheInputField from '@/components/generalComponents/TheInputField'
import TheNextButton from '@/components/generalComponents/TheNextButton'
import TheValidationErrors from '@/components/generalComponents/TheValidationErrors'
import router from '@/main'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'TheGreetingsPage',
  data () {
    return {
      phonePlaceholder: '+7 999 999-99-99',
      emailPlaceholder: 'tim.jennings@example.com',
      phone: '',
      email: ''
    }
  },
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-greetings-header': TheGreetingsHeader,
    'the-input-field': TheInputField,
    'the-next-button': TheNextButton,
    'the-validation-errors': TheValidationErrors
  },
  methods: {
    ...mapMutations(['SET_PHONE', 'SET_EMAIL']),
    goToStepOne (event) {
      const greetingsErrors = this.$refs.validationErrors
      greetingsErrors.errors = []
      let errorFlag = false
      if (this.phone.length < 16) {
        greetingsErrors.errors.push('Некорректный номер телефона')
        errorFlag = true
      }
      if (this.validateEmail()) {
        greetingsErrors.errors.push('Некорректный адрес почты')
        errorFlag = true
      }
      if (greetingsErrors.errors.length === 0 && !errorFlag) {
        event.preventDefault()
        this.$store.commit('setPhoneData', this.phone)
        this.$store.commit('setEmailData', this.email)
        router.push('/greetings/step1')
      }
    },
    validateEmail () {
      const emailRegEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return !emailRegEXP.test(this.email)
    },
    updatePhone () {
      this.phone = event.target.value
    },
    updateEmail () {
      this.email = event.target.value
    }
  },
  computed: {
    ...mapState(['phoneData', 'emailData'])
  }
}
</script>

<style scoped>
.greetingsInput{
  margin-bottom: 24px;
}
</style>
