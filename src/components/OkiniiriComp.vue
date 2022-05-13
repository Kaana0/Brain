<template>
  <div id="app1">
    <button @click="set2" class="li"><img src="../assets/hosi.svg" alt=""></button>
  </div>
</template>
<script>
export default {
  methods: {
    set2() {
      this.$store.dispatch('saveData2')
    }
  }
}
</script>

<style scoped>
#app1 {
  text-align: end;
}
button {
  padding-right: 5px;
  padding-top: 5px;
}
img {
  height: 40px;
}

</style>