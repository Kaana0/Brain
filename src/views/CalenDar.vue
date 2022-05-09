<template>
  <div id="app2">
    <h1>Calender  </h1>
    <v-calendar class="v-calendar" @dayclick="getId()">
    </v-calendar>
  <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      color: 'red'
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}${month}${day}`;
      this.menu = false;
      return;
    },
    getId() {
      this.$router.push('todaypage')
    }
  },
    components: {
      FooterComp,
  }
}
</script>

<style scoped>
h1 {
  padding-bottom: 10%;
}
.v-calendar {
  width: -webkit-fill-available;
  height: 400px;
}
#app2 {
  padding-top: 10%;
  min-height: 100vh;
  background-color: rgb(173, 132, 102);
}
.vc-day {
  min-height: 65px !important;
}
.vc-day[data-v-4420d078] {
    position: relative;
    min-height: 60px;
    z-index: 1;
}
</style>