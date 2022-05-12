<template>
  <div id="app1">
    <p @click="set2" class="li"><img src="../assets/heart.svg" alt=""></p>
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
.li {
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
}
img {
  height: 60px;
}
@media (min-width: 576px) {
  img {
    height: 30px;
    width: 30px;
  }
}

</style>