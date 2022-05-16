<template>
  <div id="app">
    <ClockComp></ClockComp>
    <HeaderComp></HeaderComp>
    <h1 class="text__bound">Great</h1>
    <h1 class="text__bound">Brain !!</h1>
  <img class="text__bound" src="../../public/nou.svg" alt="">
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import ClockComp from '@/components/ClockComp.vue';

export default {
  components: {
    HeaderComp,
    ClockComp
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