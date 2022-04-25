<template>
  <div id="app">
    <h1 class="nasu">なす</h1>
    <img class="food" :src="require('@/assets/nasu.svg')">
    <div class="setumei">
      <h1>効果</h1>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
      <h1>成分</h1>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
      <p>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
    </div><!-- /.setumei -->
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import fd from '../fd.json';
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      fdData: fd,
    }
  },
components: {
  FooterComp,
}
}
</script>
<style scoped>
.nasu {
  margin-top: 100px;
  margin-bottom: 0;
}
</style>