<template>
  <div id="app">
    <ClockComp></ClockComp>
    <HeaderComp></HeaderComp>
    <h1 class="text__bound">Great</h1>
    <h1 class="text__bound">Brain !!</h1>
  <img class="text__bound" src="../assets/brain1.svg" alt="">
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
.text__bound {
  animation: key .3s ease infinite alternate;
  font-size: 50px;
}
@keyframes key {
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}
img {
  height: 300px;
}
</style>