<template>
  <div>
    <p><slot name="title">Title</slot></p>
    <input :placeholder="placeholder" v-model="inputValue" @input="emitValue" ref="maskedInput">
  </div>
</template>

<script>
import Cleave from 'cleave.js'
import 'cleave.js/dist/addons/cleave-phone.ru'
export default {
  name: 'TheInputField',
  data () {
    return {
      inputValue: ''
    }
  },
  props: {
    placeholder: String,
    applyPhoneMask: Boolean
  },
  methods: {
    emitValue () {
      this.$emit('input', this.inputValue)
    }
  },
  mounted () {
    if (this.applyPhoneMask) {
      const cleave = new Cleave(this.$refs.maskedInput, {
        delimiters: [' ', ' ', '-', '-', '-'],
        prefix: '+7',
        noImmediatePrefix: true,
        blocks: [2, 3, 3, 2, 2],
        uppercase: true,
        numericOnly: true
      })
    }
  },
  watch: {
    value (newValue) {
      this.inputValue = newValue
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
}
p{
  margin-top: 0;
  margin-bottom: 8px;
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
input{
  width: 400px;
  height: 44px;
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #0000000A;
  border: 1px solid rgba(0, 0, 0, 0.16);
}
</style>
