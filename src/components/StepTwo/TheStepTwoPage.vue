<template>
<the-content-wrapper>
  <the-progress-bar :point-two="true"></the-progress-bar>
</the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
export default {
  name: 'StepTwoPage',
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar
  }
}
</script>

<style scoped>

</style>
