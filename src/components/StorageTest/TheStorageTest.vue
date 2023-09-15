<template>
  <h3>Greetings Data:</h3>
  <div>
    {{ phone }}
    {{ email }}
  </div>
  <h3>StepOne Data:</h3>
  <div>
    {{ nickname }}
    {{ name }}
    {{ surname }}
    {{ sex }}
  </div>
  <h3>StepTwo Data:</h3>
  <div>
    {{ necessaryAdv }}
    {{ addedAdv }}
    {{ checkboxesData }}
    {{ radioButtonsData }}
  </div>
  <h3>StepThree Data:</h3>
  <div>
    {{ ABOUT }}
  </div>
</template>

<script>
export default {
  name: 'TheStorageTest',
  data () {
    return {
      phone: this.$store.getters.PHONE,
      email: this.$store.getters.EMAIL,
      nickname: this.$store.getters.NICKNAME,
      name: this.$store.getters.NAME,
      surname: this.$store.getters.SURNAME,
      sex: this.$store.getters.SEX,
      necessaryAdv: this.$store.getters.NECESSARY_ADV,
      addedAdv: this.$store.getters.ADDED_ADV_DATA,
      checkboxesData: this.$store.getters.CHECK_BOXES_DATA,
      radioButtonsData: this.$store.getters.RADIO_BUTTON_DATA,
      ABOUT: this.$store.getters.ABOUT
    }
  }
}
</script>

<style scoped>

</style>
