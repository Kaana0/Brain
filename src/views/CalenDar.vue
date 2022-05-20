<template>
<div id="app2">
  <h1 class="text__slideIn">Calender</h1>
  <div id="calendar">
  <div id="cal-header">
    <span class="header-arrow" @click="setLastMonth()">＜</span>
    <span class="selected-month">{{year}}年{{month}}月</span>
    <span class="header-arrow" @click="setNextMonth">＞</span>
  </div>
  <table id="cal-main">
    <thead>
      <th v-for="(dayname,index) in weekdays" :key="index">{{dayname}}</th>
    </thead>
    <tbody>
      <tr v-for="(weekData,index) in calData" :key="index">
        <td class="cal-day" v-for="(dayNum,index) in weekData" :key="index" @click="dateClick(dayNum)" 
            :class="{'cal-today': isToday(dayNum), active: day === dayNum}">
          <span v-if="isToday(dayNum)">今日</span>
          <span v-else :class="{redText:checkDayNum(dayNum)}">{{dayNum}}</span>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <FooterComp></FooterComp>
</div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data(){
    return{
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
      year:2022,
      month:5,
      day:-1,
      today: ''
    }
  },
  mounted(){
    let date = new Date()
    let y = date.getFullYear()
    let m = ('0' + (date.getMonth() + 1)).slice(-2)
    let d = ('0' + date.getDate()).slice(-2)
    this.year = y
    this.month = Number(m)
    this.today = y + '-' + m + '-' + d
  },
  methods: {
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
    isToday(day) {
      let date = this.year + '-' + ('0' + this.month).slice(-2) + "-" + day
      if(this.today === date){
        return true
      }
      return false
    },
    setLastMonth() {
      if (this.month === 1) {
        this.year--
        this.month = 12
      } else {
        this.month--
      }
      this.day = -1
    },
    setNextMonth() {
      if (this.month === 12) {
        this.year++
        this.month = 1
      } else {
        this.month++
      }
      this.day = -1
    }
  },
  computed: {
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
  },
  components: {
    FooterComp,
}
}
</script>

<style scoped>
#calendar {
  margin: 40px;
}
tr {
  height: 6rem;
  font-size: 20px;
}
.redText {
  content: url(@/assets/yoku.svg);
  animation: key .5s ease infinite alternate;
  animation-iteration-count: 3;
}
h1 {
  padding-bottom: 10px;
  font-size: 40px;
}
#calendar {
  background-color: #fff;
}
#cal-header {
  padding: 0;
  text-align: center;
  margin-bottom: 10px; 
  border-bottom: 1px solid rgb(8, 8, 8);
  display:flex;
  justify-content: space-between;
}
#app2 {
  padding-top: 30px;
  height: 100vh;
  background-color: rgb(173, 132, 102);
}
#cal-header span{
  padding:15px 20px;
  display: inline-block;
}
/*---------------------------------------
カレンダーのcss
---------------------------------------*/
#cal-main {
  table-layout: fixed;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-bottom: 1px solid rgb(5, 5, 5);
  border-collapse: collapse;
}
#cal-main th {
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: rgb(3, 3, 3);
}
#cal-main td {
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid rgb(3, 3, 3);
}
.cal-today {
  background-color: #fcf8e3;
}
@media (min-width: 1200px) {
  #cal_main {
    height: 600px;
  }
}
</style>
