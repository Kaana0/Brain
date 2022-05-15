<template>
  <div id="app">
    <ClockComp></ClockComp>
    <h1 class="food">Search</h1>
      <input  type="text" v-model="inputText">
      <ul>
        <li v-for="(item, index) in foodSearch" :key="index">
          {{ item.name }}
          <br><img class="food" :src="require('@/assets/'+item.photo)">
          <br>{{ `【効果】${item.kouka}` }}<br>{{ `【成分】${item.seibun}` }}
        </li>
      </ul>
    <img class="nou" src="../assets/brain2.svg" alt="脳" v-if="inputText == ''">
    <FooterComp></FooterComp>
  </div>
</template>
<script>
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
  line-height: 2;
  padding: 0 10px;
}
.food {
  height: 70px;
  animation: key .3s ease infinite alternate;
  font-size: 50px;
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
  height: 25px;
  text-align: center;
  margin-top: 30px;
}
h1 {
  padding: 10px;
}
</style>
