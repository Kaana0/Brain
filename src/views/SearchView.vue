<template>
  <div id="app">
    <h1>Search</h1>
      <input type="text" v-model="inputText">
      <ul>
        <li v-for="(item, index) in foodSearch" :key="index">
          {{ item.name }}
          <br><img class="food" :src="require('@/assets/'+item.photo)"><br>{{ item.kouka }}<br>{{ item.seibun }}
        </li>
      </ul>
    <img src="../assets/brain2.svg" alt="脳">
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      inputText: '',
    }
  },
  computed: {
    foodSearch() {
      if(this.inputText == '') {
        return ''
      } else {
        return this.$store.state.fd.filter((item) => {
        return item.name.indexOf(this.inputText) != -1
        })
      }
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
  flex-wrap: wrap;
  justify-content: center;
}
.food {
  width: 60px;
  height: 60px;
}
</style>
