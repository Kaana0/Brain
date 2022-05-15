<template>
  <div id="footer">
      <ul class="footer">
        <router-link class="button li" to="/search">探す</router-link>
        <router-link class="button li" to="/list">一覧</router-link>
        <router-link class="button li" to="/calendar">日付</router-link>
        <!-- <router-link to="/okiniiri" class="li">お気に入り</router-link> -->
      </ul>
  </div>
</template>

<script>
</script>
<style scoped>
.li {
  width: 100%;
  margin: 0;
  line-height: 4;
}
.button {
    background: mistyrose;
    border-radius: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 220px;
    padding: 10px 25px;
    color: rgb(85, 50, 3);
    transition: 0.3s ease-in-out;
    font-weight: 600;
    box-shadow: 5px 5px 0 #903a38;
    border-radius: 50px;
}
.button:hover {
  background-color: #c49494;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}
.button:after {
    position: absolute;
    top: 50%;
    right: 20px;
    transition: 0.2s ease-in-out;
    font-weight: 900;
    transform: translateY(-50%);
}
</style>