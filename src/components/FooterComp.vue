<template>
  <div id="footer">
      <ul class="footer">
        <router-link to="/search" class="li">探す</router-link>
        <router-link to="/list" class="li">一覧</router-link>
        <router-link to="/calendar" class="li">日付</router-link>
        <!-- <router-link to="/okiniiri" class="li">お気に入り</router-link> -->
      </ul>
  </div>
</template>

<script>
</script>
<style scoped>
.li {
  border: solid 1px rgb(85, 50, 3);
  width: 100%;
  margin: 0;
  /* height: 4em; */
  line-height: 4;
}
ul {
  background-color: mistyrose;
}
</style>