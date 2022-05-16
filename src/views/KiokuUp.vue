<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/butaniku">豚肉<br><img class="food_img keyframe3 animation" :src="require('@/assets/buta.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/origo">オリゴ糖<br><img class="food_img keyframe3 animation" :src="require('@/assets/origo.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/onion">玉ねぎ<br><img class="food_img keyframe3 animation" :src="require('@/assets/onion.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/lemon">レモン<br><img class="food_img keyframe3 animation" :src="require('@/assets/lemon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/kaki">カキ<br><img class="food_img keyframe3 animation" :src="require('@/assets/kaki.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/egg">卵<br><img class="food_img keyframe3 animation" :src="require('@/assets/egg.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/nut">ナッツ<br><img class="food_img keyframe3 animation" :src="require('@/assets/nut.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/tomato">トマト<br><img class="food_img keyframe3 animation" :src="require('@/assets/tomato.svg')"></router-link></li>
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
.animation{
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  width: 128px;
}

.keyframe3{
  animation-name: anim_s;
  transform: rotate(10deg);
  animation-duration: 5s;
}

@keyframes anim_s {
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

</style>
