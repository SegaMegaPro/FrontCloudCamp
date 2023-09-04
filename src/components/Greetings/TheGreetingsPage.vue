<template>
    <the-content-wrapper>
      <the-greetings-header></the-greetings-header>
    </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheGreetingsHeader from '@/components/Greetings/TheGreetingsHeader'
export default {
  name: 'TheGreetingsPage',
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-greetings-header': TheGreetingsHeader
  }
}
</script>

<style scoped>
</style>
