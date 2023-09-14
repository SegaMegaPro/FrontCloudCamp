<template>
  <p v-if="applyTitle"><slot name="title">Title</slot></p>
  <div class="checkBoxesWrapper">
    <label for="field-checkbox-group-option-1">1</label>
    <input type="checkbox" id="field-checkbox-group-option-1" value="1" @input="emitValueOne">
    <label for="field-checkbox-group-option-2">2</label>
    <input type="checkbox" id="field-checkbox-group-option-2" value="2" @input="emitValueTwo">
    <label for="field-checkbox-group-option-3">3</label>
    <input type="checkbox" id="field-checkbox-group-option-3" value="3" @input="emitValueThree">
  </div>
</template>

<script>
export default {
  name: 'TheCheckBoxGroup',
  props: {
    applyTitle: Boolean(),
    checkBoxOne: Boolean(),
    checkBoxTwo: Boolean(),
    checkBoxThree: Boolean()
  },
  methods: {
    emitValueOne (checkBox) {
      this.$emit('update:checkBoxOne', checkBox.value)
    },
    emitValueTwo (checkbox) {
      this.$emit('update:checkBoxTwo', checkbox.value)
    },
    emitValueThree (checkbox) {
      this.$emit('update:checkBoxThree', checkbox.value)
    }
  }
}
</script>

<style scoped>
p{
  margin-top: 24px;
  margin-bottom: 8px;
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.checkBoxesWrapper{
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
