<template>
  <the-content-wrapper class="stepOneWrapper">
    <the-progress-bar :point-one="true"></the-progress-bar>
    <the-input-field id="field-nickname" class="stepOneInputs" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="nicknameTip">
      <template v-slot:title>Nickname</template>
    </the-input-field>
    <the-input-field id="field-name" class="stepOneInputs" :type="'input'" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="nameTip">
      <template v-slot:title>Name</template>
    </the-input-field>
    <the-input-field id="field-surname" class="stepOneInputs" :type="'input'" :placeholder="placeholder" :bg-color="bgColor" :apply-tip="true" :tip-content="surnameTip">
      <template v-slot:title>Surname</template>
    </the-input-field>
    <the-select-field :searchable="applySearchable" id="field-sex">
      <template v-slot:title>Sex</template>
    </the-select-field>
    <div class="stepOneButtonsWrapper">
      <the-back-button id="button-back"><template v-slot:text>Назад</template></the-back-button>
      <the-next-button id="button-next"><template v-slot:text>Далее</template></the-next-button>
    </div>
  </the-content-wrapper>
</template>

<script>
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheInputField from '@/components/generalComponents/TheInputField'
import TheSelectField from '@/components/generalComponents/TheSelectField'
import TheNextButton from '@/components/generalComponents/TheNextButton'
import TheBackButton from '@/components/generalComponents/TheBackButton'
export default {
  name: 'TheStepOnePage',
  components: {
    TheNextButton,
    'the-content-wrapper': TheContentWrapper,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField,
    'the-select-field': TheSelectField,
    'the-next-button': TheNextButton,
    'the-back-button': TheBackButton
  },
  data () {
    return {
      placeholder: 'Placeholder',
      bgColor: '#FFFFFF',
      nicknameTip: 'Не больше 30 символов, можно использовать буквы и цифры (спец. символы запрещены)',
      nameTip: 'Не больше 50 символов, только буквы',
      surnameTip: 'Не больше 50 символов, только буквы',
      applySearchable: false
    }
  }
}
</script>

<style scoped>
.stepOneWrapper{
  height: 821px;
  padding: 62px 110px ;
}
.stepOneButtonsWrapper{
  display: flex;
  width: 692px;
  justify-content: space-between;
}
</style>
