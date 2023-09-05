<template>
    <the-content-wrapper>
      <the-greetings-header></the-greetings-header>
      <form>
        <the-input-field class="greetingsInput" id="field-phone" :placeholder="phonePlaceholder">
          <template v-slot:title>Номер телефона</template>
        </the-input-field>
        <the-input-field class="greetingsInput" id="field-email" :placeholder="emailPlaceholder">
          <template v-slot:title>Email</template>
        </the-input-field>
      </form>
    </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheGreetingsHeader from '@/components/generalComponents/TheGreetingsHeader'
import TheInputField from '@/components/generalComponents/TheInputField'
export default {
  name: 'TheGreetingsPage',
  data () {
    return {
      phonePlaceholder: '+7 999 999-99-99',
      emailPlaceholder: 'tim.jennings@example.com'
    }
  },
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-greetings-header': TheGreetingsHeader,
    'the-input-field': TheInputField
  }
}
</script>

<style scoped>
.greetingsInput{
  margin-bottom: 24px;
}
</style>
