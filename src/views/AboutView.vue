<template>
  <div id="app">
      <div class="about">
      <ClockComp></ClockComp>
      <h1 class="text__slideIn">How to Use...</h1>
      <h3 class="text__slideIn">Great Brainを<br>手に入れよう！</h3>
      <p>普段食べているものが<br>どんな成分かを知って、<br>頭に良い食事をしましょう。</p>
      <p>記憶力、集中力、<br>脳に良い食べ物を取り入れて<br><span class="span">Happy</span>な日々になりますように。</p>
      </div><!-- /.about -->
      
      <div class="nav">
      <div class="hide" @click="isHide = true" v-show="!isHide">
      <p class="setumei">食材を<br>入力できるよ!</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      <div class="hide"  @click="isHide1 = true" v-show="!isHide1">
      <p class="setumei">項目別に<br>なってるよ！</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      <div class="hide" @click="isHide2 = true" v-show="!isHide2">
      <p class="setumei">その日食べた物を<br>押してね！</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      </div>
      <FooterComp></FooterComp>
  </div>
</template>
<script>
import ClockComp from '@/components/ClockComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      isHide: false,
      isHide1: false,
      isHide2: false
    }
  },
  components: {
    ClockComp,
    FooterComp,
  }
}
</script>
<style scoped>
.nav {
  display: flex;
  position: fixed;
  bottom: 5%;
  z-index: 1;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
}
.setumei {
  font-size: 15px;
  color: #FFF;
}
p {
  animation: slideIn2 1.6s infinite;
  animation-iteration-count: 1;
  font-size: 20px;
}
@keyframes slideIn2 {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
h1 {
  padding: 10px;
  font-size: 40px;
}
h3 {
  padding-bottom: 10px;
  font-size: 30px;
}
p {
  line-height: 2.5;
}
.span {
  color: gold;
}
</style>
