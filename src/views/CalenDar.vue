<template>
  <div id="app">
    <h1>Calender  </h1>
    <v-calendar @dayclick="getId()"></v-calendar>
  <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
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
    getId(koukaid) {
      this.$store.commit('changeVegetable', { veginame: koukaid})
      this.$router.push('todaypage')
    }
  },
    components: {
      FooterComp,
  }
}
</script>

<style scoped>
#app {
  margin-top: 30%;
}
h1 {
  padding-bottom: 10%;
}

</style>