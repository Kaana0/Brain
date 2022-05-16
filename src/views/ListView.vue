<template>
  <div id="list">
    <ul>
      <li><router-link to="/atamaii"><img class="hirameki" src="../assets/denki.svg" alt="">頭に良い</router-link></li>
      <li><router-link to="/syuutyuu"><img class="hirameki" src="../assets/atama1.svg" alt="">集中力Up</router-link></li>
      <li><router-link to="/kiokuup"><img class="hirameki" src="../assets/atama2.svg" alt="">記憶力Up</router-link></li>
      <li><router-link to="/sikouup"><img class="hirameki" src="../assets/hirameki.svg" alt="">思考力Up</router-link></li>
      <li><router-link to="/noukassei"><img class="hirameki" src="../assets/atama3.svg" alt="">脳の活性化</router-link></li>
    </ul>
      <!-- <span v-for="item in foodSearch" :key="item"  @click="getId(kouka)">
        <img :src="require('@/assets/'+item.photo1)"></span>
      <li v-for="kouka in koukaList" :key="kouka" @click="getId(kouka)">{{ kouka }}
        </li> -->
    <FooterComp></FooterComp>
  </div> 
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
    kouka:[
    { name: "なす"},
    { name: 'アスパラガス'},
    ],
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
    // photoList() {
    //   const result = this.$store.state.fd.map((obj) => obj.photo1)
    //   return new Set(result)
    // },
    // foodSearch() {
    //   return this.$store.state.fd.filter((item) => {
    //     return item.photo1
    // })
    // }
  },
  components: {
    FooterComp,
  },
  }
</script>

<style scoped>
li {
  /* border-bottom: 1px solid rgb(48, 18, 18); */
  font-size: 2em;
  height: 20%;
  align-items: center;
}
a, img {
  height: 100%;
}
ul {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 76px;
}
.hirameki {
  margin-right: 10px;
}
</style>