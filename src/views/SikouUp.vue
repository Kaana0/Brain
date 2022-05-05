<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/pi-man">ピーマン<br><img class="food_img" :src="require('@/assets/pi-man.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/origo">オリゴ糖<br><img class="food_img" :src="require('@/assets/origo.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/sanma">秋刀魚<br><img class="food_img" :src="require('@/assets/sanma.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/avocado">アボカド<br><img class="food_img" :src="require('@/assets/avocado.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/banana">バナナ<br><img class="food_img" :src="require('@/assets/banana.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/egg">卵<br><img class="food_img" :src="require('@/assets/egg.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/nut">ナッツ<br><img class="food_img" :src="require('@/assets/nut.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/tomato">トマト<br><img class="food_img" :src="require('@/assets/tomato.svg')"></router-link></li>
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