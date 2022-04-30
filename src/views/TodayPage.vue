<template>
  <div id="app">
    {{ vegitableName }}のページ
      <div 
                class="full-image-wrap"
                v-if="fullImage"
            >
                <img 
                    class="full-image"
                    :src="currentImageUrl.src"
                > 
            </div>
          <!-- <img 
                        class="img"
                        :src="image.src"
                        @click="imageClick(index)" 
                    > -->
    <ul>
      <li v-for="(task, index) in doneTaskList" :key="index" @click="imageClick(index)">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: '',
      tasks: [
        { name: 'たらこパスタ', done: false},
        { name: 'ラーメン食べる', done: false},
      ],
      image: { src: "../assets/ok.svg"},
      fullImage: false,
      currentImageIndex: -1,
    }
  },
  methods: {
    imageClick(index) {
      this.currentImageIndex = index;
      this.fullImage = true;
    },
    getId(koukaid) {
      this.$store.commit('changeVegetable', { veginame: koukaid})
      this.$router.push('vegetablelist')
    }
  },
  computed: {
    currentImageUrl(){
      return this.image[this.currentImageIndex]
    },
    doneTaskList() {
      return this.tasks.filter((item) => {
        return item.done === false
      })
    },
        vegitableName() { // クリックされた項目を取得
      return this.$store.state.vegetable
    },
    vegitableList() { // 食べ物リストを取得
      return this.$store.state.fd
    },
    filteredList() { // クリックされた項目が一致する食べ物
      return this.vegitableList.filter((vegi) => {
        return vegi.kouka === this.vegitableName
      })
    },
        koukaList() {
      const result = this.$store.state.fd.map((obj) => obj.kouka)
      return new Set(result)
    }
  }
}
</script>