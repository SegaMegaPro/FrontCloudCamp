<template>
  <div>
    <p><slot name="title">Title</slot></p>
    <input :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'TheInputField',
  props: {
    placeholder: String
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
