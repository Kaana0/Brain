<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="butaniku">豚肉<br><img class="food_img" :src="require('@/assets/buta.svg')"></router-link></li>
      <li class="food_list_li" @click="getVege(name)"><router-link to="">メロン<br><img class="food_img" :src="require('@/assets/melon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/nasi">梨<br><img class="food_img" :src="require('@/assets/nasi.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/avocado">アボカド<br><img class="food_img" :src="require('@/assets/avocado.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/potato">じゃがいも<br><img class="food_img" :src="require('@/assets/potato.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/satumaimo">さつまいも<br><img class="food_img" :src="require('@/assets/satumaimo.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/soramame">そらまめ<br><img class="food_img" :src="require('@/assets/soramame.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/wakame">わかめ<br><img class="food_img" :src="require('@/assets/wakame.svg')"></router-link></li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  methods: {
    getVege(fdName) {
      this.$store.commit('changeVegetable', { vegename: fdName})
      this.$router.push('melonpage')
    }
  },
  computed: {
    // nameList() {
    //   const result = this.fdData.map((obj) => obj.name)
    //   return new Set(result)
    // }
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