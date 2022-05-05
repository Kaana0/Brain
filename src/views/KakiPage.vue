<template>
  <div id="food_page">
      <ul>
        <li v-for="(item, index) in foodSearch" :key="index">
          <h1 class="food_ttl">{{ item.name }}</h1>
          <h1><img class="food_img" :src="require('@/assets/'+item.photo)"></h1>
          <h2 class="txt_ttl">【効果】</h2>
          <p class="food_txt">{{ item.kouka }}</p>
          <h2 class="txt_ttl">【成分】</h2>
          <p class="food_txt"> {{ item.seibun }}</p>
        </li>
      </ul>
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
        return this.$store.state.fd.filter((item) => {
        return item.name == 'カキ'
        })
    },
  },
  components: {
    FooterComp,
  }
}
</script>
