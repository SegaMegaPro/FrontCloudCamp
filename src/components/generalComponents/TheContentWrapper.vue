<template>
<div class="theContentWrapper">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'TheContentWrapper'
}
</script>

<style>
.theContentWrapper{
  display: flex;
  flex-direction: column;
  margin: 24px auto 24px auto;
  padding: 24px;
  background-color: #FFFFFF;
  width: 900px;
  height: 704px;
  box-sizing: border-box;
}
</style>
