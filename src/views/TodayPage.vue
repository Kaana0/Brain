<template>
  <div id="list">
    <h1>{{ todayDate }}のページ</h1>
    <ul>
      <li @click="isShow = !isShow"><img v-show="isShow" src="../assets/ok.svg" alt="">野菜</li>
      <li @click="isShow1 = !isShow1"><img v-show="isShow1" src="../assets/ok.svg" alt="">果物</li>
      <li @click="isShow2 = !isShow2"><img v-show="isShow2" src="../assets/ok.svg" alt="">きのこ</li>
      <li @click="isShow3 = !isShow3"><img v-show="isShow3" src="../assets/ok.svg" alt="">海藻</li>
      <li @click="isShow4 = !isShow4"><img v-show="isShow4" src="../assets/ok.svg" alt="">豆</li>
      <li @click="isShow5 = !isShow5"><img v-show="isShow5" src="../assets/ok.svg" alt="">芋</li>
      <li @click="isShow6 = !isShow6"><img v-show="isShow6" src="../assets/ok.svg" alt="">魚</li>
      <li @click="isShow7 = !isShow7"><img v-show="isShow7" src="../assets/ok.svg" alt="">肉</li>
      <li @click="isShow8 = !isShow8"><img v-show="isShow8" src="../assets/ok.svg" alt="">乳製品</li>
      <li @click="isShow9 = !isShow9"><img v-show="isShow9" src="../assets/ok.svg" alt="">種</li>
    </ul>
    
    <!-- <button @click="followButton"><img src="../assets/ok.svg" alt="">きのこ</button> -->
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      ImageData: 'ok.svg',
      isShow: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      isShow6: false,
      isShow7: false,
      isShow8: false,
      isShow9: false,
      todayDate: '',
    }
  },
  computed: {
    // followButton(val) {
    //   if(val) {
    //     this.button += ImageData;
    //   }
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
  flex-wrap: wrap;
  gap: 40px;
  margin: auto;
  padding: 0 20px;
}
li {
  background-color: antiquewhite;
  border: 1px solid rgb(73, 15, 15);
  width: 6em;
  height: 3em;
  line-height: 3;
  z-index: 1;
}
img {
  z-index: 0;
}
#app {
  margin-top: 15%;
}
h1 {
  padding-bottom: 10%;
}
</style>