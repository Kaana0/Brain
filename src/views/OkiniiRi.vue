<template>
  <div id="app">
    <h1>お気に入りリスト</h1>
    <h1>{{ bookMark }}</h1>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';

export default {
  computed: {
      dailyFoodList() {
    return this.$store.state.dailyFoodList
  },
  },
  components: {
    FooterComp,
  }
}
</script>
