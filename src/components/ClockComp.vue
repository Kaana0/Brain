<template>
  <div>
    <span class="time__dsp">{{ time }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    time() {
      return this.$store.getters.time;
    }
  },
  created() {
    this.$store.dispatch('updateTime');
  },
}
</script>

<style scoped>
</style>
