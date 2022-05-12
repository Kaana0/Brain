<template>
  <div id="app1">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted() {
      this.$store.dispatch('loadData')
      this.$store.dispatch('loadData2')
  }
}
</script>
