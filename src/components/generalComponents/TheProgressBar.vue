<template>
  <div class="progressBarWrapper">
    <div class="progressLine" :class="{ 'oneToTwo' : pointTwo , 'twoToThree' : pointThree}"></div>
    <div class="points" :class="{ 'currentPoint' : pointOne || pointTwo || pointThree }">
      <div :class="{ 'currentPointDot' : pointOne }">
        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="pointTwo || pointThree">
          <path d="M4.66147 7.87365C4.56698 7.99874 4.41929 8.07227 4.26252 8.07227H3.68243C3.54729 8.07227 3.41791 8.01757 3.32376 7.92063L0.504131 5.01762C0.315687 4.8236 0.315686 4.51491 0.504131 4.32089L0.975725 3.83535C1.1721 3.63317 1.49669 3.63317 1.69306 3.83535L3.49489 5.69046C3.70845 5.91034 4.06776 5.88806 4.25251 5.64349L8.15121 0.482651C8.32099 0.2579 8.64283 0.217688 8.86269 0.393752L9.38636 0.813089C9.59761 0.982258 9.63592 1.28881 9.47278 1.50476L4.66147 7.87365Z" fill="white"/>
        </svg>
      </div>
      <p class="pointNumbers" :class="{ 'currentPointNumber' : pointOne || pointTwo || pointThree }">1</p>
    </div>
    <div class="points" :class="{ 'currentPoint' : pointTwo || pointThree }">
      <div :class="{ 'currentPointDot' : pointTwo }">
        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="pointThree">
          <path d="M4.66147 7.87365C4.56698 7.99874 4.41929 8.07227 4.26252 8.07227H3.68243C3.54729 8.07227 3.41791 8.01757 3.32376 7.92063L0.504131 5.01762C0.315687 4.8236 0.315686 4.51491 0.504131 4.32089L0.975725 3.83535C1.1721 3.63317 1.49669 3.63317 1.69306 3.83535L3.49489 5.69046C3.70845 5.91034 4.06776 5.88806 4.25251 5.64349L8.15121 0.482651C8.32099 0.2579 8.64283 0.217688 8.86269 0.393752L9.38636 0.813089C9.59761 0.982258 9.63592 1.28881 9.47278 1.50476L4.66147 7.87365Z" fill="white"/>
        </svg>
      </div>
      <p class="pointNumbers" :class="{ 'currentPointNumber' : pointTwo || pointThree }">2</p>
    </div>
    <div class="points" :class="{ 'currentPoint' : pointThree }">
      <div :class="{ 'currentPointDot' : pointThree }"></div>
      <p class="pointNumbers" :class="{ 'currentPointNumber' : pointThree }">3</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheProgressBar',
  props: {
    pointOne: Boolean,
    pointTwo: Boolean,
    pointThree: Boolean
  },
  methods: {

  }
}
</script>

<style scoped>
.progressBarWrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 680px;
  height: 8px;
  margin: 0 auto 79px auto;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.08);
}
.progressLine{
  position: absolute;
  margin-left: 5px;
  background: #5558FA;
  height: 8px;
}
.points{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #A6A6A6;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  color: #A6A6A6;
  padding-top: 12px;
  box-sizing: border-box;
}
.currentPoint{
  background: #5558FA;
}
.currentPointNumber{
  color: #5558FA;
}
.currentPointDot{
  background: #FFFFFF;
  position: absolute;
  align-items: center;
  width: 6px;
  height: 6px;
  border-radius: 100px;
  margin: -7px 0 0 0;
}
svg{
  position: absolute;
  margin: -8px auto 0 -5px;
}
.oneToTwo{
  animation: oneToTwo 1500ms ease-in-out forwards;
}
.twoToThree{
  animation: twoToThree 1500ms ease-in-out forwards;
}
@keyframes oneToTwo {
  from {
    width: 0;
  }
  to {
    width: 340px;
  }
}
@keyframes twoToThree {
  from {
    width: 340px;
  }
  to {
    width: 670px;
  }

}
</style>
