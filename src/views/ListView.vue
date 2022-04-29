<template>
  <div id="app">
    <ul>
      <li v-for="item in foodSearch" :key="item"  @click="getId(kouka)">
        <img :src="require('@/assets/'+item.photo1)">{{ item.kouka }}
      </li>
    </ul>
    <ul>
      <li v-for="kouka in koukaList" :key="kouka" @click="getId(kouka)">
        {{ kouka }}</li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
    }
  },
  methods: {
    getId(koukaid) {
      this.$store.commit('changeVegetable', { veginame: koukaid})
      this.$router.push('vegetablelist')
      }
  },
  computed: {
    koukaList() {
      const result = this.$store.state.fd.map((obj) => obj.kouka)
      return new Set(result)
    },
    photoList() {
      const result = this.$store.state.fd.map((obj) => obj.photo1)
      return new Set(result)
    },
    foodSearch() {
      return this.$store.state.fd.filter((item) => {
        return item.photo1
    })
    }
  },
  components: {
    FooterComp,
  },
  }
</script>

<style scoped>
li {
  border-bottom: 1px solid rgb(199, 193, 193);
  font-size: 2em;
}
</style>