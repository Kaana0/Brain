<template>
  <div class="home">
    <HeaderComp></HeaderComp>
    <h1>Great</h1>
    <h1>Brain !!</h1>
    <img src="../assets/brain1.svg" alt="">
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  components: {
    HeaderComp,
  }
}
</script>
<style scoped>
.home {
  margin: 0 auto;
  padding: 80px 4%;
  width: 100%;
}
</style>