<template>
  <div id="footer">
      <ul class="footer">
        <router-link class="button li" to="/search">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg><br><p class="txt">search</p></router-link>
        <router-link class="button li" to="/list">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg><br><p class="txt">list</p></router-link>
        <router-link class="button li" to="/calendar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg><br><p class="txt">calender</p></router-link>
      </ul>
  </div>
</template>

<script>
</script>
<style scoped>
.li {
  width: 100%;
  margin: 0;
  line-height: 2;
}
.button {
    background: mistyrose;
    position: relative;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 220px;
    padding: 15px 0px;
    color: rgb(85, 50, 3);
    transition: 0.3s ease-in-out;
    box-shadow: 5px 5px 0 #903a38;
}
.button:hover {
  background-color: #c49494;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
  opacity: 0.5;
}
.button:after {
    position: absolute;
    top: 50%;
    right: 20px;
    transition: 0.2s ease-in-out;
    font-weight: 900;
    transform: translateY(-50%);
}
.txt {
  font-size: 20px;
}
</style>