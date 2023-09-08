<template>
  <div>TEST</div>
  <div>
    {{ phone }}
    {{ email }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheStepOnePage',
  data () {
    return {
      phone: this.$store.getters.PHONE,
      email: this.$store.getters.EMAIL
    }
  },
  computed: {
    ...mapGetters(['PHONE', 'EMAIL'])
  }
}
</script>

<style scoped>

</style>
