<template>
  <div id="app">
      <div class="about">
      <ClockComp></ClockComp>

      <div class="box">

        <div class="box_in1">
          <h1 class="text__slideIn">How to Use...</h1>
          <h3 class="text__slideIn">Great Brainを<br>手に入れよう！</h3>
        </div>
      

      <div class="box_in2">
        <p>普段食べているものが<br>どんな成分かを知って、<br>頭に良い食事をしましょう。</p>
        <p>記憶力、集中力、<br>脳に良い食べ物を取り入れて<br><span class="span">Happy</span>な日々になりますように。</p>
      </div>
      
      </div>

      </div><!-- /.about -->
      
      <div class="nav">
      <div @click="isHide = !isHide" v-bind:class="hide">
      <p  class="setumei">食材を<br>入力できるよ!</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      <div @click="isHide1 = !isHide1" v-bind:class="hide1">
      <p class="setumei">項目別に<br>なってるよ！</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      <div class="hide" @click="isHide2 = !isHide2" v-bind:class="hide2">
      <p class="setumei">その日食べた物を<br>押してね！</p>
      <img src="../assets/yubi1.svg" alt="">
      </div>
      </div>
      <FooterComp></FooterComp>
  </div>
</template>
<script>
import ClockComp from '@/components/ClockComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      isHide: true,
      isHide1: true,
      isHide2: true
    }
  },
  computed: {
    hide() {
      return {
        red:this.isHide,
        yellow: !this.isHide
      }
    },
    hide1() {
      return {
        red:this.isHide1,
        yellow: !this.isHide1
      }
    },
    hide2() {
      return {
        red:this.isHide2,
        yellow: !this.isHide2
      }
    }
  },
  components: {
    ClockComp,
    FooterComp,
  }
}
</script>
<style scoped>
.red {
  opacity: 1;
}
.yellow {
  opacity: 0;
}
.nav {
  display: flex;
  position: fixed;
  bottom: 8%;
  z-index: 1;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
}
.setumei {
  font-size: 15px;
  color: #FFF;
}
p {
  animation: slideIn2 1.6s infinite;
  animation-iteration-count: 1;
  font-size: 20px;
}
@keyframes slideIn2 {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
h1 {
  padding: 10px;
  font-size: 40px;
}
h3 {
  padding-bottom: 10px;
  font-size: 30px;
}
p {
  line-height: 2.5;
}
.span {
  color: gold;
}
</style>
