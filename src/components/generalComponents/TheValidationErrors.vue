<template>
<div class="validationErrorsWrapper" v-if="errors.length">
  <p>Возникли следующие проблемы:</p>
  <ul>
    <li v-for="(error, index) in errors" :key="index"> {{ error }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'TheValidationErrors',
  data () {
    return {
      errors: []
    }
  }
}
</script>

<style scoped>
.validationErrorsWrapper{
  border: 1px solid #ff7b7b;
  background-color: #FFFFFF;
  color: #ff0000;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 60px auto 50px 900px;
  text-align: center;
  font-size: 15px;
  width: 250px;
  height: 500px;
}
</style>
