<template>
  <div id="hosi">
    <button @click="hosiClick(dayNum)" :class="{'li': isToday(dayNum), active: day ===dayNum}"><img src="../assets/hosi.svg" alt=""></button>
    <span :class="{redText:checkDayNum(dayNum)}">{{dayNum}}</span>

  </div>
</template>
<script>
export default {
  data() {
    return {
    today: '',
    }
  },
  methods: {
    hosiClick() {
      this.$store.dispatch('saveData2')
    },
    getStanp(itemname) {
      this.$store.commit('getStanp' ,{itemname})
    },
    checkDayNum(dayNum) {
      const clickDay = this.year + '-' + this.month + '-' + dayNum
      // 受け取った日付がVuexのdailyFoodListのdateにあるかどうか
      const result = this.$store.state.dailyFoodList.find((item) => {
        return item.date === clickDay
      })
      if(result) {
        return true
      } else {
        return false
      }
    },
        isToday(day) {
      let date = this.year + '-' + ('0' + this.month).slice(-2) + "-" + day
      if(this.today === date){
        return true
      }
      return false
    },
        dateClick(dayNum) {
      // 日付をクリックされた！
      // 変数clickDayに、年月日を代入する(yyyy-mm-dd形式)
      const clickDay = this.year + '-' + this.month + '-' + dayNum
      // VuexのmutationsであるaddClickDayを呼び出す 引数として👆で作ったclickDayを渡す
      this.$store.commit('addClickDay', { day: clickDay })
      // VuexのdailyFoodListの中にクリックされた日付のデータがあるかどうか
      const result = this.$store.state.dailyFoodList.find((item) => {
        return item.date === clickDay
      })
      if(result) {
        // resultにデータがあった場合(クリックされた日付のデータがある)
        this.$router.push('todaypage')        // ページ移動
      } else {
      // resultがundefinedの場合(ない)
        this.$store.commit('addNewList')      // VuexのmutationsであるaddNewListを呼び出す
        this.$router.push('todaypage')        // ページ移動
      }
    },
  },
  computed: {
        dailyFoodList() {
      return this.$store.state.dailyFoodList
    },
      calData() {
      console.log(this.year + "-" + this.month + "のデータ作成")
      let calData = []
      let firstWeekDay = new Date(this.year, this.month - 1, 1).getDay()
      let lastDay = new Date(this.year, this.month, 0).getDate()
      let dayNum = 1
      while (dayNum <= lastDay) {
        let weekData = []
        for (let i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            weekData[i] = ''
          } else if (lastDay < dayNum) {
            weekData[i] = ''
          } else {
            weekData[i] = dayNum
            dayNum++
          }
        }
        calData.push(weekData)
      }
      return calData
    }
  }
}
</script>

<style scoped>
#hosi {
  text-align: end;
}
button {
  padding-right: 5px;
  padding-top: 5px;
}
img {
  height: 40px;
}
</style>