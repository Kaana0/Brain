<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="butaniku">豚肉<br><img class="food_img" :src="require('@/assets/buta.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">オリゴ糖<br><img class="food_img" :src="require('@/assets/origo.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">秋刀魚<br><img class="food_img" :src="require('@/assets/sanma.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">レモン<br><img class="food_img" :src="require('@/assets/lemon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">バナナ<br><img class="food_img" :src="require('@/assets/banana.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">卵<br><img class="food_img" :src="require('@/assets/egg.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">エリンギ<br><img class="food_img" :src="require('@/assets/eringi.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">トマト<br><img class="food_img" :src="require('@/assets/tomato.svg')"></router-link></li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
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