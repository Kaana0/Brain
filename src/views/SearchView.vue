<template>
  <div id="app">
    <DayComp></DayComp>
    <ClockComp></ClockComp>

    <div class="box">

      <div class="box_in1">
        <h1 class="food">Search</h1>
        <input  type="text" v-model="inputText">
      </div>

        <div class="box_in2">
          <ul>
            <li v-for="(item, index) in foodSearch" :key="index">
              {{ item.name }}
              <br><img class="food" :src="require('@/assets/'+item.photo)">
              <p class="text__slideIn">{{ `【効果】${item.kouka}` }}</p>
              <p class="text__slideIn">{{ `【成分】${item.seibun}` }}</p>
            </li>
          </ul>
          <img class="nou" src="../assets/brain2.svg" alt="脳" v-if="inputText == ''">
        </div>

    </div>

    <FooterComp></FooterComp>
  </div>
</template>
<script>
import DayComp from '@/components/DayComp.vue';
import ClockComp from '@/components/ClockComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      inputText: '',
    }
  },
  computed: {
    foodSearch() {
      if(this.inputText == '') {
        return ''
      } else {
        return this.$store.state.fd.filter((item) => {
        return item.name.indexOf(this.inputText) != -1
        })
      }
    },
  },
  methods: {

  },
  components: {
    DayComp,
    ClockComp,
    FooterComp,
  }
}
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}
li {
  background-color: antiquewhite;
  padding: 0 10px;
  overflow: hidden;
  font-size: 15px;
}
.food {
  height: 70px;
  animation: key .3s ease infinite alternate;
  font-size: 50px;
  animation-iteration-count: 2;
}
@keyframes key {
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}
.nou {
  animation: key .3s ease infinite alternate;
}
@keyframes key {
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}

input {
  background-color: #FFF;
  border-style: inset;
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
}
h1 {
  padding: 10px;
}
.text__slideIn {
  animation: slideIn 1.6s infinite;
  animation-iteration-count: 1;
  text-align: left;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
