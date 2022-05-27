<template>
  <div id="food_page">
    <h1 class="food_ttl">{{ $store.state.fd[3].name }}</h1>
    <h1><img class="food_img" :src="require('@/assets/buta.svg')"></h1>
    <h2 class="txt_ttl">【効果】</h2>
    <p class="food_txt">{{ $store.state.fd[3].kouka }}</p>
    <h2 class="txt_ttl">【成分】</h2>
    <p class="food_txt">{{ $store.state.fd[3].seibun }}</p>
    <!-- <ul>
      <li v-for="(item, index) in foodSearch" :key="index">
        {{ item.name }}
        <br><img class="food" :src="require('@/assets/'+item.photo)"><br>{{ `【効果】${item.kouka}` }}<br>{{ `【成分】${item.seibun}` }}
      </li> 
    </ul> -->
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
