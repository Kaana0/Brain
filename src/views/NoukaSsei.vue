<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/edamame">枝豆<br><img class="food_img keyframe3 animation" :src="require('@/assets/edamame.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/cheese">チーズ<br><img class="food_img keyframe3 animation" :src="require('@/assets/cheese.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/cu-ri">きゅうり<br><img class="food_img keyframe3 animation" :src="require('@/assets/cu-ri.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/daikon">大根<br><img class="food_img keyframe3 animation" :src="require('@/assets/daikon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/okura">オクラ<br><img class="food_img keyframe3 animation" :src="require('@/assets/okura.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/goma">ごま<br><img class="food_img keyframe3 animation" :src="require('@/assets/goma.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/kabotya">かぼちゃ<br><img class="food_img keyframe3 animation" :src="require('@/assets/kabotya.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/kaiware">かいわれ<br><img class="food_img keyframe3 animation" :src="require('@/assets/kaiware.svg')"></router-link></li>
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