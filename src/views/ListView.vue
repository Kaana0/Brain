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
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: {
    FooterComp,
  }
}
</script>
<style scoped>
li {
  border-bottom: 1px solid rgb(199, 193, 193);
  font-size: 2em;
}
</style>