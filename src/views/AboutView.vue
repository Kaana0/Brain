<template>
  <div id="app">
      <div class="about">
      <ClockComp></ClockComp>
      <h1>How to Use...</h1>
      <h3>Great Brainを手に入れよう！</h3>
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
h1 {
  padding: 10px;
}
h3 {
  padding-bottom: 10px;
}
p {
  line-height: 3;
}
span {
  color: gold;
}
</style>
