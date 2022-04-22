<template>
  <div id="app">
    <h1>Search</h1>
    <form v-on:submit.prevent="addSearch">
      <input type="text" v-model="inputText">{{ $store.state.foodDatas }}
    </form>
    <FooterComp></FooterComp>
  </div>
</template>
<script>

import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      inputText: '',
      brainDatas: [
        {
          date: '2022-04-21',
          cont: [ 1, 3 ]
        }
      ],
    }
  },
  methods: {
    addSearch() {
      return this.show.push({ })
    }
  },
  computed: {
  },
  components: {
    FooterComp,
  }
}
</script>
