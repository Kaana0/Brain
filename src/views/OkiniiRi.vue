<template>
  <div id="app">
    <h1>お気に入りリスト</h1>
        <li v-for="(item, index) in foodSearch" :key="index">
          {{ item.name }}
        </li>
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
    BookMark() {
    return this.$store.state.dailyFoodList
  },
  foodSearch() {
    return this.$store.state.fd.filter((item) => {
    return item.name
    })
},
  },
  components: {
    FooterComp,
  }
}
</script>
