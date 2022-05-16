<template>
  <div id="app">
      <div class="about">
      <ClockComp></ClockComp>
      <h1 class="text__slideIn">How to Use...</h1>
      <h3 class="text__slideIn">Great Brainを<br>手に入れよう！</h3>
      <p>普段食べているものが<br>どんな成分かを知って、<br>頭に良い食事をしましょう。</p>
      <p>記憶力、集中力、<br>脳に良い食べ物を取り入れて<br><span>Happy</span>な日々になりますように。</p>
      </div><!-- /.about -->
      <FooterComp></FooterComp>
  </div>
</template>
<script>
import ClockComp from '@/components/ClockComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  components: {
    ClockComp,
    FooterComp,
  }
}
</script>
<style scoped>

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
}
h3 {
  padding-bottom: 10px;
}
p {
  line-height: 2.5;
}
span {
  color: gold;
}
</style>
