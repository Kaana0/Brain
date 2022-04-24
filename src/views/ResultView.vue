<template>
  <div id="app">
    <h1>あなたの脳は今...</h1>
    <h1>95%</h1>
    <img src="../assets/brain3.svg" alt="脳">
    <FooterComp></FooterComp>
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
