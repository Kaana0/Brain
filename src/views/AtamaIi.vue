<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="butaniku">豚肉<br><img class="food_img" :src="require('@/assets/buta.svg')"></router-link></li>
      <li class="food_list_li" @click="getVege()"><router-link to="">メロン<br><img class="food_img" :src="require('@/assets/melon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">梨<br><img class="food_img" :src="require('@/assets/nasi.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">アボカド<br><img class="food_img" :src="require('@/assets/avocado.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">じゃがいも<br><img class="food_img" :src="require('@/assets/potato.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">さつまいも<br><img class="food_img" :src="require('@/assets/satumaimo.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">そらまめ<br><img class="food_img" :src="require('@/assets/soramame.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">わかめ<br><img class="food_img" :src="require('@/assets/wakame.svg')"></router-link></li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  methods: {
    getVege(vegeid) {
      this.$store.commit('changeVegetable', { vegename: vegeid})
      this.$router.push('melonpage')
    }
  },
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
.food_list {
  display: flex;
  width: 100%;
  align-items: center;
}
.food_list_li {
  width: 50%;
  height: 155px;
  border: 1px solid rgb(84, 60, 60);
  font-size: 30px;
  color: bisque;
}
.food_img {
  width: 100px;
}
</style>