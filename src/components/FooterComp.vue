<template>
  <div id="app">
    <main>
      <ul class="footer">
        <li @click="toggleActive"><router-link to="/search">探す</router-link></li>
        <li @click="toggleActive"><router-link to="/list">一覧</router-link></li>
        <li @click="toggleActive"><router-link to="/calendar">日付</router-link></li>
        <li @click="toggleActive"><router-link to="/result">達成</router-link></li>
      </ul>
    </main>
  </div>
</template>

<script>
// import AboutView from '../views/AboutView.vue'

// export default {
//   AboutView,
// }
</script>