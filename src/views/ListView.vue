<template>
  <div id="app">
    <nav>
      <li><router-link to="/goodbrain">頭に良い</router-link></li>
      <li><router-link to="/focus">集中力Up</router-link></li>
      <li><router-link to="/memory">記憶力Up</router-link></li>
      <li><router-link to="/thinking">思考力Up</router-link></li>
      <li><router-link to="/brainup">脳の活性化</router-link></li>
      <li><router-link to="/season">季節別</router-link></li>
      <li><router-link to="/vegetablelist">食材別</router-link></li>
    </nav>
    <ul>
      <li v-for="(kouka, index) in koukaList" :key="index"><router-link to="/vagetable">{{ kouka }}</router-link></li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import fd from '../fd.json';
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      fdData: fd,
    }
  },
  components: {
    FooterComp,
  },
  computed: {
    koukaList() {
      const result = this.fdData.map((obj) => obj.kouka)
      return new Set(result)
    }
  }
}
</script>
<style scoped>
li {
  border-bottom: 1px solid rgb(199, 193, 193);
  font-size: 2em;
}
</style>