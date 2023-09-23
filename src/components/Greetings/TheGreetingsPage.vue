<!--suppress ALL -->
<template>
    <the-content-wrapper>
      <the-validation-errors ref="validationErrors"></the-validation-errors>
      <the-greetings-header></the-greetings-header>
        <the-input-field class="greetingsInput" id="field-phone" :placeholder="phonePlaceholder" @input="updatePhone" :apply-phone-mask="true" :apply-title="true">
          <template v-slot:title>Номер телефона</template>
        </the-input-field>
        <the-input-field class="greetingsInput" id="field-email" :placeholder="emailPlaceholder" @input="updateEmail" apply-title="true">
          <template v-slot:title>Email</template>
        </the-input-field>
        <the-next-button id="button-start" @click="goToStepOne">
          <template v-slot:text>Начать</template>
        </the-next-button>
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
      phone: this.$store.getters.PHONE,
      email: this.$store.getters.EMAIL
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
      if (this.validatePhone()) {
        greetingsErrors.errors.push('Некорректный номер телефона')
        errorFlag = true
      }
      if (this.validateEmail()) {
        greetingsErrors.errors.push('Некорректный адрес почты')
        errorFlag = true
      }
      if (greetingsErrors.errors.length === 0 && !errorFlag) {
        event.preventDefault()
        this.$store.dispatch('SET_PHONE', this.phone)
        this.$store.dispatch('SET_EMAIL', this.email)
        router.push('/step1')
      }
    },
    validatePhone () {
      return (this.phone.length < 16)
    },
    validateEmail () {
      const emailRegEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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
  margin-bottom: 16px;
}
#button-start{
  margin-top: 24px;
}
</style>
