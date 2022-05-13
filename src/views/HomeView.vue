<template>
  <div id="app">
    <ClockComp></ClockComp>
    <HeaderComp></HeaderComp>
    <h1>Great</h1>
    <h1>Brain !!</h1>
    <img src="../assets/brain1.svg" alt="">
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
</style>