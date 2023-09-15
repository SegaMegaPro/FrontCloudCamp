<template>
  <div :id="componentId">
    <p v-if="applyTitle"><slot name="title">Title</slot></p>
    <input :placeholder="placeholder" v-model="inputValue" @input="emitValue" ref="maskedInput" :style="{backgroundColor: bgColor, width: inputWidth, height: inputHeight, padding: inputPadding}">
    <a href="#" v-if="applyTip" @mouseover="showTipContent = true" @mouseleave="showTipContent = false" @click="preventDefault">
      Tip
      <div v-if="showTipContent" class="tooltip">{{tipContent}}</div>
    </a>
    <button v-if="applyDelete" @click="deleteButton(componentId)">
      <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.453 16.6522L4.55826 8.15225C4.52719 7.85703 4.75867 7.5999 5.05552 7.5999H14.9447C15.2416 7.5999 15.4731 7.85703 15.442 8.15225L14.5472 16.6522C14.5205 16.9067 14.3059 17.0999 14.05 17.0999H5.95025C5.69437 17.0999 5.47979 16.9067 5.453 16.6522Z" fill="#CCCCCC"/>
        <path d="M17.0001 5.6999H3.00012C2.72398 5.6999 2.50012 5.47605 2.50012 5.1999V4.2999C2.50012 4.02376 2.72398 3.7999 3.00012 3.7999H5.35511C5.44983 3.7999 5.54261 3.77299 5.62263 3.72231L8.37761 1.97749C8.45764 1.92681 8.55041 1.8999 8.64514 1.8999H11.3551C11.4498 1.8999 11.5426 1.92681 11.6226 1.97749L14.3776 3.72231C14.4576 3.77299 14.5504 3.7999 14.6451 3.7999H17.0001C17.2763 3.7999 17.5001 4.02376 17.5001 4.2999V5.1999C17.5001 5.47604 17.2763 5.6999 17.0001 5.6999Z" fill="#CCCCCC"/>
      </svg>
    </button>
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
    bgColor: String(),
    tipMargin: String(),
    applyTip: Boolean(),
    applyTitle: Boolean(),
    applyDelete: Boolean(),
    tipContent: String(),
    inputWidth: String(),
    inputHeight: String(),
    inputPadding: String(),
    componentId: Number
  },
  methods: {
    emitValue () {
      this.$emit('input', this.inputValue)
    },
    preventDefault () {
      event.preventDefault()
    },
    deleteButton () {
      this.$emit('delete', this.componentId)
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
  margin-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.16);
}
a{
  width: min-content;
  margin-top: 8px;
  margin-bottom: 24px;
  color: rgba(0, 0, 0, 0.48);
  font-size: 12px;
  font-weight: 400;
}
a:focus{
  outline: none;
  border-color: #5558FA;
  box-shadow: 0 0 5px rgb(85, 88, 250);
}
a:link, a:visited, a:active{
  text-decoration: none;
}
.tooltip {
  position: absolute;
  margin-top: -68px;
  margin-left: 320px;
  border: 1px solid #5558FA;
  background-color: #ffffff;
  color: #333333;
  padding: 5px;
  border-radius: 5px;
}
input:focus {
  outline: none;
  border-color: #5558FA;
  box-shadow: 0 0 5px rgb(85, 88, 250);
}
button{
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  text-align: center;
  background: none;
  margin: -46px 0 16px 315px;
  transition: all 0.5s;
  color: #5558FA;
}
button::after{
  content: '';
  position: absolute;
  top: -1px;
  left: -0.8px;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid #5558FA;
  border-radius: 3px;
  transform: scale(1.4,1.4);
}
button:hover::after{
  opacity: 1;
  transform: scale(1,1);
}
button svg{
  width: 30px;
  height: 30px;
}
</style>
