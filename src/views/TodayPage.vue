<template>
  <div id="list">
    <h1>{{  }}今日のページ</h1>
    <ul>
      <li v-for="(item, index) in foodSearch" :key="index" @click="getStanp(item.name)">
        <img v-show="item.isShow" src="../assets/ok.svg" alt="">{{ item.name }}
      </li>
    </ul>
    <router-link class="routerlink" to="/result">結果</router-link>
    
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
    }
  },
  methods: {
    getStanp(itemname) {
      this.$store.commit('getStanp' ,{itemname})
    },
  },
  computed: {
      TodayFood() {
        return this.$store.state.TodayFood
      },
      foodSearch() {
        return this.$store.state.TodayFood
    },
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
  position: relative;
}
img {
  z-index: 0;
  position: absolute;
  top: -1.5em;
  left: 0;
}
#app {
  margin-top: 15%;
}
h1 {
  padding-bottom: 10%;
}
.routerlink {
  background-color: bisque;
  border: 1px solid rgb(73, 15, 15);
  width: 6em;
  height: 3em;
  line-height: 3;
  margin-top: 3em;
  border-radius: 30px;
  display: inline-block;
}
</style>