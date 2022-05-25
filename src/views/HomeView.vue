<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <h1 class="text__bound">Great</h1>
    <h1 class="text__bound">Brain !!</h1>
  <router-link to="/about" class="li">
  <img class="text__bound" src="../../public/nou.svg" alt="">
  </router-link>
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
h1 {
    animation-iteration-count: 2;
    padding-bottom: 20px;
}
img {
  height: 300px;
  border-radius: 50%;
}
</style>