<template>
    <the-content-wrapper>
      <the-validation-errors ref="validationErrors"></the-validation-errors>
      <the-greetings-header></the-greetings-header>
      <form @submit.prevent="goToStepOne">
        <the-input-field class="greetingsInput" id="field-phone" :placeholder="phonePlaceholder" v-model="phone" @input="updatePhone" :value="phone">
          <template v-slot:title>Номер телефона</template>
        </the-input-field>
        <the-input-field class="greetingsInput" id="field-email" :placeholder="emailPlaceholder" v-model="email" @input="updateEmail" :value="email">
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
    ...mapMutations(['setPhoneData', 'setEmailData']),
    goToStepOne () {
      const greetingsErrors = this.$refs.validationErrors
      if (this.phone.length < 16) {
        greetingsErrors.errors.push('Некорректный номер телефона')
      } else if (this.validateEmail()) {
        greetingsErrors.errors.push('Некорректный адрес почты')
      } else {
        event.preventDefault()
        router.push('/greetings/step1')
      }
    },
    validateEmail () {
      const emailRegEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (emailRegEXP.test(this.email) && this.email.length !== 0) {
        return false
      }
    },
    updatePhone (value) {
      this.phone = event.target.value
    },
    updateEmail (value) {
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
