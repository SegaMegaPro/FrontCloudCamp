<template>
  <the-content-wrapper class="stepOneWrapper">
    <the-progress-bar :point-one="true"></the-progress-bar>
  </the-content-wrapper>
</template>

<script>
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
export default {
  name: 'TheStepOnePage',
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar
  }
}
</script>

<style scoped>
.stepOneWrapper{
  height: 821px;
}
</style>
