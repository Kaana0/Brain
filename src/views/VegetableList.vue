<template>
  <div id="app">
    {{ vegitableName }}効果のあるたべもの
    <ul>
      <li v-for="kouka in koukaList" :key="kouka" @click="getId(kouka)">
        {{ kouka }}</li>
    </ul>
  </div>
</template>

<script>
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
    vegitableName() { // クリックされた項目を取得
      return this.$store.state.vegetable
    },
    vegitableList() { // 食べ物リストを取得
      return this.$store.state.fd
    },
    filteredList() { // クリックされた項目が一致する食べ物
      return this.vegitableList.filter((vegi) => {
        return vegi.kouka === this.vegitableName
      })
    },
        koukaList() {
      const result = this.$store.state.fd.map((obj) => obj.kouka)
      return new Set(result)
    }
  }
}
</script>