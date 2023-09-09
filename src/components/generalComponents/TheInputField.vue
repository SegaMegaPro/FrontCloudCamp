<template>
  <div>
    <p><slot name="title">Title</slot></p>
    <input :placeholder="placeholder" v-model="inputValue" @input="emitValue" ref="maskedInput" :style="{backgroundColor: bgColor}">
    <a href="#" v-if="applyTip" @mouseover="showTipContent = true" @mouseleave="showTipContent = false" @click="preventDefault">
      Tip
      <div v-if="showTipContent" class="tooltip">{{tipContent}}</div>
    </a>
  </div>
</template>

<script>
import Cleave from 'cleave.js'
import 'cleave.js/dist/addons/cleave-phone.ru'
export default {
  name: 'TheInputField',
  data () {
    return {
      inputValue: '',
      showTipContent: false
    }
  },
  props: {
    placeholder: String(),
    applyPhoneMask: Boolean(),
    bgColor: String,
    applyTip: Boolean(),
    tipContent: String()
  },
  methods: {
    emitValue () {
      this.$emit('input', this.inputValue)
    },
    preventDefault () {
      event.preventDefault()
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
a{
  width: 300px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: rgba(0, 0, 0, 0.48);
  font-size: 12px;
  font-weight: 400;
}
a:link, a:visited, a:active{
  text-decoration: none;
}
.tooltip {
  position: absolute;
  margin-top: -60px;
  margin-left: 420px;
  border: 1px solid #5558FA;
  background-color: #ffffff;
  color: #333333;
  padding: 5px;
  border-radius: 5px;
}
</style>
