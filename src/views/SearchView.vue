<template>
  <div id="app">
    <h1>Search</h1>
    <!-- <p>{{ $route.params.foodId }}</p> -->
      <input type="text" v-model="inputText">
      <ul>
        <li v-for="(item, index) in foodSearch" :key="index">
          <router-link to="/nasucomp">{{ item.name }}
          <br><img class="food" :src="require('@/assets/'+item.photo)"><br>{{ item.kouka }}<br>{{ item.seibun }}</router-link>
        </li>
      </ul>
    <img src="../assets/brain2.svg" alt="脳">
    <FooterComp></FooterComp>
    <!-- <p>{{ findFoods }}</p> -->
  </div>
</template>
<script>
import fd from '../fd.json';
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      fdData: fd,
      inputText: '',
    }
  },
  methods: {
    moveFood() {
      this.$router.push({ name: 'foods', params: {foodId: 123}})
    }
  },
  computed: {
    foodSearch() {
      return this.fdData.filter((item) => {
        return item.name.indexOf(this.inputText) != -1
      })
  },
  // findFoods() {
  //   return this.fdData.find((item) => {
  //     return item.id === this.$route.params.foodId
  //   })
  // }
  },
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
}
.food {
  width: 60px;
  height: 60px;
}
</style>
