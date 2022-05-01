<template>
  <div id="app">
    {{ todayDate }}のページ
    <ul>
      <li @click="imageClick">野菜</li>
      <li @click="imageClick">果物</li>
      <li @click="imageClick">きのこ</li>
      <li @click="imageClick">海藻</li>
      <li @click="imageClick">豆</li>
      <li @click="imageClick">芋</li>
      <li @click="imageClick">魚</li>
      <li @click="imageClick">肉</li>
      <li @click="imageClick">乳製品</li>
      <li @click="imageClick">種</li>
    </ul>
    <p><img src="../assets/ok.svg" alt=""></p>
    <!-- <transition name="slide" mode="out-in" appear>
    <OkComp v-if="imageClick === 'OkComp' "></OkComp>
    <OkComp v-else></OkComp>
    </transition> -->
    <FooterComp></FooterComp>
  </div>
</template>
<script>
// import OkComp from '@/components/OkComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      imageClick: '',
      todayDate: '',
      image: { src: "require('@/assets/ok.svg')", done: false},
    }
  },
  methods: {
  },
  computed: {
    // image() {
    //   return require('@/assets/ok.svg')
    // }
  },
  components: {
    FooterComp,
    // OkComp,
  }
}
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin: auto;
  padding: 0 20px;
}
li {
  background-color: antiquewhite;
  border: 1px solid rgb(73, 15, 15);
  width: 6em;
  height: 3em;
  line-height: 3;
}
</style>