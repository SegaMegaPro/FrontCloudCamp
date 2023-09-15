<template>
  <router-view name="theGreetingsPage"></router-view>
  <router-view name="theStepOnePage"></router-view>
  <router-view name="theStepTwoPage"></router-view>
  <router-view name="theStepThreePage"></router-view>
</template>

<script lang="ts">

export default ({
  name: 'App'
})
</script>

<style>
/*noinspection CssUnknownTarget*/
@import url(https://db.onlinewebfonts.com/c/37086b994764dba84b2ee0f1083bfeed?family=SB+Sans+Interface);
body{
  background-color: #F4F4F5;
  font-family: 'SB Sans Interface',serif;
  margin: 0;
  padding: 0;
}
</style>
