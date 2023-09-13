<template>
  <p v-if="applyTitle"><slot name="title">Title</slot></p>
  <div class="selectWrapper">
      <button @click="showDropDown">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.353553 2.05848C0.158291 1.86321 0.158291 1.54663 0.353553 1.35137L1.05683 0.64809C1.25194 0.452978 1.56823 0.452806 1.76355 0.647705L5.64683 4.52252C5.84201 4.71727 6.15799 4.71727 6.35317 4.52252L10.2364 0.647705C10.4318 0.452806 10.7481 0.452979 10.9432 0.64809L11.6464 1.35137C11.8417 1.54663 11.8417 1.86321 11.6464 2.05848L6.35355 7.35137C6.15829 7.54663 5.84171 7.54663 5.64645 7.35137L0.353553 2.05848Z" fill="black" fill-opacity="0.24"/>
      </svg>
    </button>
    <input :style="{backgroundColor: bgColor}" v-model="value" @input="emitValue" @click="showDropDown" readonly :placeholder="placeholder">
      <div v-if="showDropDownValue" @mouseleave="showDropDown">
        <ul :style="{backgroundColor: bgColor}">
          <li v-for="option in options" :key="option.selectedValue" @click="setLocalValue(option.selectedValue)">
            {{ option.selectedValue }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TheSelectField',
  data () {
    return {
      options: [{
        selectedValue: 'man'
      }, {
        selectedValue: 'woman'
      }],
      value: '',
      disabledOption: true,
      showDropDownValue: false
    }
  },
  emits: ['input'],
  props: {
    placeholder: String(),
    bgColor: String(),
    id: String,
    applyTitle: Boolean()
  },
  methods: {
    emitValue () {
      this.$emit('input', this.value)
    },
    showDropDown () {
      this.showDropDownValue = this.showDropDownValue === false
    },
    setLocalValue (selectedValue) {
      this.value = selectedValue
      this.emitValue()
      this.showDropDownValue = false
    }
  },
  watch: {
    value (newValue) {
      this.value = newValue
    }
  }
}
</script>

<style scoped>
p{
  margin-top: 0;
  margin-bottom: 8px;
  width: 300px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.selectWrapper{
  width: 300px;
  height: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;
}
input{
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding: 12px;
  box-sizing: border-box;
  background-color: #0000000A;
  border: 1px solid rgba(0, 0, 0, 0.16);
  cursor: pointer;
}
ul{
  list-style-type: none;
  user-select: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  margin-top: 0;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08);
}
li{
  padding: 8px 12px;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  list-style-image: none;
  user-select: none;
  cursor: pointer;
}
button{
  padding: 2px;
  position: absolute;
  margin: 11px 0 0 255px;
  z-index: 20;
  border: none;
  width: 40px;
  height: 20px;
  background-color: #FFFFFF;
  cursor: pointer;
}
input:focus {
  outline: none;
  border-color: #5558FA;
  box-shadow: 0 0 5px rgb(85, 88, 250);
}
li:hover{
  border: 1px solid #5558FA;
  box-shadow: 0 0 5px rgb(85, 88, 250);
}
</style>
