<template>
  <the-content-wrapper class="stepOneWrapper">
    <the-progress-bar :point-one="true"></the-progress-bar>
    <the-input-field id="field-nickname" class="stepOneInputs" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="nicknameTip">
      <template v-slot:title>Nickname</template>
    </the-input-field>
    <the-input-field id="field-name" class="stepOneInputs" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="nameTip">
      <template v-slot:title>Name</template>
    </the-input-field>
    <the-input-field id="field-surname" class="stepOneInputs" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="surnameTip">
      <template v-slot:title>Surname</template>
    </the-input-field>
  </the-content-wrapper>
</template>

<script>
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheInputField from '@/components/generalComponents/TheInputField'
export default {
  name: 'TheStepOnePage',
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField
  },
  data () {
    return {
      placeholder: 'Placeholder',
      bgColor: '#FFFFFF',
      nicknameTip: 'Не больше 30 символов, можно использовать буквы и цифры (спец. символы запрещены)',
      nameTip: 'Не больше 50 символов, только буквы',
      surnameTip: 'Не больше 50 символов, только буквы'
    }
  }
}
</script>

<style scoped>
.stepOneWrapper{
  height: 821px;
  padding: 62px 110px ;
}
.stepOneInputs input{
  border: 1px solid red;
  background-color: #FFFFFF;
}
</style>
