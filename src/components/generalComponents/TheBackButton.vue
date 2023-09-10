<template>
  <button><slot name="text">Button</slot></button>
</template>

<script>
export default {
  name: 'TheBackButton'
}
</script>

<style scoped>
button{
  border: 1px solid #5558FA;
  border-radius: 4px;
  width: 79px;
  height: 44px;
  background: #FFFFFF;
  color: #5558FA;
  font-size: 14px;
  transition: all 0.5s;
  position: relative;
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
</style>
