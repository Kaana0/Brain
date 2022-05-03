<template>
  <div id="app">
    {{ vegitableName }}効果のあるたべもの
  </div>
</template>
<script>
export default {
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
  }
}
</script>