<template>
  <div id="app1">
    <router-link to="/about" class="li">使い方</router-link>
  </div>
</template>

<style scoped>
.li {
  position: relative;
  overflow: hidden;
}
.li:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(70, 2, 2);
  transform: translate(-100%, 0);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
  content: "";
}
.li:hover:after {
  transform: translate(0, 0);
}
.li {
  display: flex;
  justify-content: flex-end;
  /* padding-right: 7%; */
  width: 100px;
}
</style>