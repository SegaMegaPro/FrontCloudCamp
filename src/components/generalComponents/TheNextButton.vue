<template>
  <button type="submit"><slot name="text">Button</slot></button>
</template>

<script>
export default {
  name: 'TheNextButton'
}
</script>

<style scoped>
button{
  border: none;
  border-radius: 4px;
  width: 79px;
  height: 44px;
  background: #5558FA;
  color: #FFFFFF;
  font-size: 14px;
}
</style>
