<template>
  <p v-if="applyTitle"><slot name="title">Title</slot></p>
  <div class="radioButtonsWrapper">
    <label for="field-radio-group-option-1">1</label>
    <input type="radio" id="field-radio-group-option-1" value="1" @input="emitValue" name="radio" v-model="value">
    <label for="field-radio-group-option-2">2</label>
    <input type="radio" id="field-radio-group-option-2" value="2" @input="emitValue" name="radio" v-model="value">
    <label for="field-radio-group-option-3">3</label>
    <input type="radio" id="field-radio-group-option-3" value="3" @input="emitValue" name="radio" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'TheRadioButtonGroup',
  data () {
    return {
      value: ''
    }
  },
  props: {
    applyTitle: Boolean()
  },
  methods: {
    emitValue () {
      this.$emit('update', this.value)
    }
  }
}
</script>

<style scoped>
p{
  margin-top: 0;
  margin-bottom: 8px;
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.radioButtonsWrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100px;
  font-size: 14px;
  margin-bottom: 24px;
}
input{
  margin-left: 0;
  border: rgba(0, 0, 0, 0.51)
}
label{
  position: relative;
  top: 17px;
  left: 20px;
  margin: -17px 0 0 0
}
</style>
