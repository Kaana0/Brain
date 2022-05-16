<template>
  <div id="list">
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/butaniku">豚肉<br><img class="food_img keyframe3 animation" :src="require('@/assets/buta.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/melon">メロン<br><img class="food_img keyframe3 animation" :src="require('@/assets/melon.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/nasi">梨<br><img class="food_img keyframe3 animation" :src="require('@/assets/nasi.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/avocado">アボカド<br><img class="food_img keyframe3 animation" :src="require('@/assets/avocado.svg')"></router-link></li>
    </ul>
    <ul class="food_list">
      <li class="food_list_li"><router-link to="/potato">じゃがいも<br><img class="food_img keyframe3 animation" :src="require('@/assets/potato.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/satumaimo">さつまいも<br><img class="food_img keyframe3 animation" :src="require('@/assets/satumaimo.svg')"></router-link></li>
    </ul>
    <ul class="food_list ul_last">
      <li class="food_list_li"><router-link to="/soramame">そらまめ<br><img class="food_img keyframe3 animation" :src="require('@/assets/soramame.svg')"></router-link></li>
      <li class="food_list_li"><router-link to="/wakame">わかめ<br><img class="food_img keyframe3 animation" :src="require('@/assets/wakame.svg')"></router-link></li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  methods: {
  },
  computed: {
  },
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
.ul_last {
  padding-bottom: 38px;
}
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
