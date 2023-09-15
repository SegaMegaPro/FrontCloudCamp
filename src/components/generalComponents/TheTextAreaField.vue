<template>
  <div>
    <p v-if="applyTitle"><slot name="title">Title</slot></p>
    <textarea
      :placeholder="placeholder"
      v-model="inputValue"
      @input="emitValue">
    </textarea>
    <a class="charsCounter">{{this.inputValue.length}} / {{this.maxValueLength}}</a>
    <a href="#" v-if="applyTip" @mouseover="showTipContent = true" @mouseleave="showTipContent = false" @click="preventDefault">
      Tip
      <div v-if="showTipContent" class="tooltip">{{tipContent}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TheTextAreaField',
  data () {
    return {
      inputValue: '',
      showTipContent: false,
      maxValueLength: 250
    }
  },
  props: {
    placeholder: String(),
    applyTip: Boolean(),
    applyTitle: Boolean(),
    tipContent: String()
  },
  methods: {
    emitValue () {
      if (this.inputValue.length > this.maxValueLength) {
        this.inputValue = this.inputValue.slice(0, this.maxValueLength)
      }
      this.$emit('input', this.inputValue)
    },
    preventDefault () {
      event.preventDefault()
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
textarea{
  font-family: "SB Sans Interface",sans-serif;
  width: 680px;
  max-width: 680px;
  min-width: 680px;
  height: 84px;
  max-height: 150px;
  min-height: 84px;
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #FFFFFF;
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
  margin-top: -20px;
  margin-left: 466px;
  border: 1px solid #5558FA;
  background-color: #ffffff;
  color: #333333;
  padding: 5px;
  border-radius: 5px;
}
textarea:focus {
  outline: none;
  border-color: #5558FA;
  box-shadow: 0 0 5px rgb(85, 88, 250);
}
.charsCounter{
  position: relative;
  width: 70px;
  margin-bottom: -25px;
  margin-left: 315px;
  font-size: 12px;
}
</style>
