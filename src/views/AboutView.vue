<template>
  <div class="about">
    <main>
      <div class="about">
      <h1>How to Use...</h1>
      <h3>Great Brainを手に入れよう！</h3>
      <p>普段食べているものが<br>どんな成分かを知って、<br>頭に良い食事をしましょう。</p>
      <p>記憶力、集中力、<br>脳に良い食べ物を取り入れて<br><span>Happy</span>な日々になりますように。</p>
      </div><!-- /.about -->
      <FooterComp></FooterComp>
    </main>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
.about {
  margin-top: 30%;
}
h1 {
  padding-bottom: 10%;
}
h3 {
  padding-bottom: 5%;
}
p {
  line-height: 3;
}
span {
  color: gold;
}
</style>
