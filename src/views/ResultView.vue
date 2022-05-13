<template>
  <div id="app">
    <h1>あなたの脳は今...</h1>
    <h1>{{ todaysBrainPower }}%</h1>
    <img src="../assets/brain3.svg" alt="">
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    const tf = this.$store.state.TodayFood
    let counter = 0
    tf.forEach(element => {
      if(element.isShow == true) {
        counter++
      }
    })
    this.count = Math.floor((counter / tf.length) * 100)
  },
  computed: {
    days() {
      return this.$store.state.clickDay
    },
    dailyFoodList() {
      return this.$store.state.dailyFoodList
    },
    todaysDailyFoodList() {
      return this.dailyFoodList.find((item) => {
        return item.date === this.days
      })
    },
    todaysBrainPower() {
      let counter = 0
      this.todaysDailyFoodList.foodList.forEach(item => {
        if(item.isShow) {
          counter++
        }
      })
      return counter / this.todaysDailyFoodList.foodList.length * 100
    }
  },
  components: {
    FooterComp,
  }
}
</script>
