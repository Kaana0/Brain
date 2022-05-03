<template>
  <div id="food_page">
    <h1>{{ vegetableName }}</h1>
  <ul>
    <li v-for="item in filteredList" :key="item">
      {{ item.name }}
      <br><img class="food" :src="require('@/assets/'+item.photo)">
      <br>{{ `【効果】${item.kouka}` }}<br>{{ `【成分】${item.seibun}` }}
    </li>
  </ul>
  </div>
</template>
<script>
export default {
    computed: {
    vegetableName() {
      return this.$store.state.vegetable
    },
    vegetableList() {
      return this.$store.state.fd
    },
    filteredList() {
      return this.vegetableList.filter((vege) => {
        return vege.name.indexOf() === this.vegetableName
      })
    },
    // foodSearch() {
    //     return this.$store.state.fd.filter((item) => {
    //     return item.name
    //     })
    // },
  },
}
</script>