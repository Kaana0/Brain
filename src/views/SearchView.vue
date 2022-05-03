<template>
  <div id="app">
    <h1>Search</h1>
      <input type="text" v-model="inputText">
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
    FooterComp,
  }
}
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  background-color: antiquewhite;
  width: 70%;
  line-height: 2;
}
.food {
  width: 60px;
  height: 60px;
}
input {
  background-color: #FFF;
  border-style: inset;
  height: 2em;
  text-align: center;
  margin-bottom: 2em;
}
h1 {
  padding-bottom: 5%;
}
</style>
