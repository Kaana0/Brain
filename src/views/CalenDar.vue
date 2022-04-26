<template>
  <div id="header">
    <span @click="lastMonth" class="header-arrow">＜</span>
    <span class="selected-month">{{year}}年{{month}}月</span>
    <span @click="nextMonth" class="header-arrow">＞</span>
    <div>
      <table id="main">
        <thead>
          <th v-for="(weekDay,weekDayIndex) in weekDays" :key="weekDayIndex">
            {{weekDay}}
          </th>
        </thead>
        <tbody>
          <tr v-for="(rowNumber,rowNumberIndex) in calendar" :key="rowNumberIndex" :class="{'today':isToday(dayNumber)}">
            <span v-if="isToday(dayNumber)">今日</span>  
            <span v-else>{{dayNumber}}</span>
            <td v-for="(columnNumber,columnNumberIndex) in rowNumber" :key="columnNumberIndex">
              {{columnNumber}}
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
        weekDays:['日','月','火','水','木','金','土'],
        year:2022,
        month:4,
    }
  },
  created(){
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    let actualDay = date.getDate();
    this.today = this.year + '-' + this.month + '-' + actualDay;
  },
  computed:{
    calendar:function(){
      let calendar = [];
      let firstWeekDay = new Date(this.year,this.month - 1,1).getDay();
      let lastDay = new Date(this.year,this.month,0).getDate();
      let dayNumber = 1;
      while(dayNumber <= lastDay){
          let weekData = [];
          for(let i = 0;i <= 6;i ++){
              if(calendar.length == 0 && i < firstWeekDay){
                  weekData[i] = '';
                  
              }else if(lastDay < dayNumber){
                  weekData[i] = '';
              }else{
                  weekData[i] = dayNumber;
                  dayNumber ++;
              }
          }
          calendar.push(weekData); 
      }
      return calendar;
    }
  },
  methods:{
    lastMonth(){
      this.month --;
      if(this.month < 1){
          this.year --;
          this.month = 12;
      }
    },
    nextMonth(){
      this.month ++;
      if(this.month > 12){
          this.year ++;
          this.month = 1;
      }
    },
    isToday(day){
      let date = this.year + "-" + this.month + "-" + day;
      if(this.today === date){
        return true;
      }
      return false;
      }
  },
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
</style>