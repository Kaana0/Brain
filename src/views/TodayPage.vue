<template>
  <div id="list">
    <h1>{{ TodayPage }}</h1>
    <ul>
      <li class="todaypage" v-for="(item, index) in filteredFoodList.foodList" :key="index" @click="getStanp(item.name)">
        <img v-show="item.isShow" src="../assets/ok.svg" alt="">{{ item.name }}
      </li>
    </ul>
    <p @click="set" class="routerlink">結果</p>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
      year:2020,
      month:3,
      day:-1,
    }
  },
  mounted() {
    let date = new Date()
    let y = date.getFullYear()
    let m = ('0' + (date.getMonth() + 1)).slice(-2)
    let d = ('0' + date.getDate()).slice(-2)
    this.year = y
    this.month = Number(m)
    this.today = y + '-' + m + '-' + d
  },
  methods: {
    set() {
      this.$store.dispatch('saveData')
      this.$router.push('result')
    },
    getStanp(itemname) {
      this.$store.commit('getStanp' ,{itemname})
    },
  },
  computed: {
    dailyFoodList() {
      return this.$store.state.dailyFoodList
    },
    filteredFoodList() {
      return this.dailyFoodList.find((item) => {
        return item.date === this.TodayPage
      })
    },
    foodSearch() {
      return this.$store.state.TodayFood
    },
    TodayPage() {
      return this.$store.state.clickDay
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
  gap: 30px;
  margin: auto;
  padding: 0 20px;
}
.todaypage {
  background-color: antiquewhite;
  border: 1px solid rgb(73, 15, 15);
  width: 150px;
  height: 60px;
  z-index: 1;
  position: relative;
  font-size: 30px;
}
img {
  z-index: 0;
  position: absolute;
  top: -1.5em;
  left: 0;
  width: 200px;
}
#app {
  margin-top: 15%;
}
h1 {
  padding-top: 60px;
  padding-bottom: 20px;
}
.routerlink {
  background-color: bisque;
  border: 1px solid rgb(73, 15, 15);
  width: 100px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
  display: inline-block;
  font-size: 30px;
}
@media (min-width: 992px) {
  .todaypage {
    width: 10em;
    height: 5em;
    line-height: 5;
  }
  .routerlink {
    width: 10em;
    height: 5em;
    line-height: 5;
  }
}

</style>