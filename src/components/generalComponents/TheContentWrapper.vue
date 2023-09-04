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
  background-color: #FFFFFF;
  width: 900px;
  height: 704px;
}
</style>
