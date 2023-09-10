<template>
  <p><slot name="title">Title</slot></p>
  <div class="selectWrapper">
    <vue-select class="selectField" :options="options" style="font-family: 'SB Sans Interface',sans-serif" :searchable="false" :placeholder="placeholder" v-model="selectedValue"></vue-select>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css'
import VueSelect from 'vue-select'
export default {
  name: 'TheSelectField',
  data () {
    return {
      options: [
        'man',
        'woman'
      ],
      placeholder: 'Placeholder',
      selectedValue: String()
    }
  },
  components: {
    'vue-select': VueSelect
  }
}
</script>

<style scoped>
.selectWrapper{
  width: 400px;
  height: 44px;
  margin-bottom: 132px;
}
p{
  margin-top: 0;
  margin-bottom: 8px;
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.selectField{
  box-sizing: border-box;
  --vs-dropdown-max-height: 120px;
  --vs-font-size: 14px;
  --vs-line-height: 34px;
  --vs-controls-color: #0000003D;
  --vs-border-color: #00000029;
  --vs-dropdown-bg: #FFFFFF;
  --vs-dropdown-option-color: #333333;
  --vs-selected-color: #333333;
  --vs-dropdown-option-padding: 8px;
  --vs-actions-padding: 4px 12px 0 3px;
  --vs-search-input-color: #0000007A;
  --vs-dropdown-option--active-bg: #5558FA;
  --vs-dropdown-option--active-color: #FFFFFF;
}
</style>
