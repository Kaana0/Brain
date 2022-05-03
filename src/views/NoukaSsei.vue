<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="butaniku">枝豆<br><img class="food_img" :src="require('@/assets/edamame.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">チーズ<br><img class="food_img" :src="require('@/assets/cheese.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">きゅうり<br><img class="food_img" :src="require('@/assets/cu-ri.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">大根<br><img class="food_img" :src="require('@/assets/daikon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">オクラ<br><img class="food_img" :src="require('@/assets/okura.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">ごま<br><img class="food_img" :src="require('@/assets/goma.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="">かぼちゃ<br><img class="food_img" :src="require('@/assets/kabotya.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="">かいわれ<br><img class="food_img" :src="require('@/assets/kaiware.svg')"></router-link></li>
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