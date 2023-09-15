<!--suppress ALL -->
<template>
  <the-content-wrapper class="stepThreeWrapper">
    <the-validation-errors></the-validation-errors>
    <the-progress-bar :point-three="true"></the-progress-bar>
    <the-input-field :placeholder="placeholder"
                     :apply-title="true"
                     :apply-tip="true"
                     :tip-content="tip"
                     :bg-color="bgColor"
                     :tip-margin="tipMargin"
                     :input-height="inputHeight"
                     :input-width="innerWidth"
                     :input-padding="inputPadding"
                     @input="updateValue"
                     v-model="inputValue">
      <template v-slot:title>About</template>
    </the-input-field>
    <div class="charsCounter">
      {{ inputValue.length }} / {{maxLength}}
    </div>
  </the-content-wrapper>
</template>

<script>
import TheContentWrapper from '@/components/generalComponents/TheContentWrapper'
import TheValidationErrors from '@/components/generalComponents/TheValidationErrors'
import TheProgressBar from '@/components/generalComponents/TheProgressBar'
import TheInputField from '@/components/generalComponents/TheInputField'
export default {
  name: 'TheStepThreePage',
  data () {
    return {
      tip: 'Максимальная длина 200 символов',
      tipMargin: '-20px 0 0 466px',
      bgColor: '#FFFFFF',
      inputHeight: '84px',
      innerWidth: '680px',
      inputPadding: '12px 12px 52px 12px',
      placeholder: 'Placeholder',
      maxLength: 200,
      inputValue: ''
    }
  },
  components: {
    'the-content-wrapper': TheContentWrapper,
    'the-validation-errors': TheValidationErrors,
    'the-progress-bar': TheProgressBar,
    'the-input-field': TheInputField
  },
  computed: {
    updateCounter (counter) {
      return this.charsCounter
    }
  },
  methods: {
    updateValue () {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>
.stepThreeWrapper{
  padding: 62px 110px;
}
.charsCounter{
  position: absolute;
  font-size: 12px;
  margin: 210px 0 0 645px;
}
</style>
