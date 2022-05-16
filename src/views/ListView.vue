<template>
  <div id="list">
    <ul>
      <li><router-link to="/atamaii"><img class="hirameki" src="../assets/denki.svg" alt=""><button id="foot"><button class="button-os">頭に良い</button></button></router-link></li>
      <li><router-link to="/syuutyuu"><img class="hirameki" src="../assets/atama1.svg" alt=""><button id="foot"><button class="button-os">集中力Up</button></button></router-link></li>
      <li><router-link to="/kiokuup"><img class="hirameki" src="../assets/atama2.svg" alt=""><button id="foot"><button class="button-os">記憶力Up</button></button></router-link></li>
      <li><router-link to="/sikouup"><img class="hirameki" src="../assets/hirameki.svg" alt=""><button id="foot"><button class="button-os">思考力Up</button></button></router-link></li>
      <li><router-link to="/noukassei"><img class="hirameki" src="../assets/atama3.svg" alt=""><button id="foot"><button class="button-os">脳の活性化</button></button></router-link></li>
    </ul>
    <body>
    <!-- <button id="foot"><button class="button-os"><a href="#">BUTTON</a></button></button> -->
</body>

      <!-- <span v-for="item in foodSearch" :key="item"  @click="getId(kouka)">
        <img :src="require('@/assets/'+item.photo1)"></span>
      <li v-for="kouka in koukaList" :key="kouka" @click="getId(kouka)">{{ kouka }}
        </li> -->
    <FooterComp></FooterComp>
  </div> 
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
    kouka:[
    { name: "なす"},
    { name: 'アスパラガス'},
    ],
    }
  },
  methods: {
    getId(koukaid) {
      this.$store.commit('changeVegetable', { veginame: koukaid})
      this.$router.push('vegetablelist')
      }
  },
  computed: {
    koukaList() {
      const result = this.$store.state.fd.map((obj) => obj.kouka)
      return new Set(result)
    },
  },
  components: {
    FooterComp,
  },
  }
</script>

<style scoped>
li {
  height: 20%;
  /* align-items: center; */
}
a, img {
  height: 100%;
}
ul {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 76px;
}
.hirameki {
  margin-right: 10px;
}

button{
  border-radius: 30px;
  box-shadow: 0 0 8px rgb(207, 207, 207);
}
button:hover{
  border: none;
  padding: 15px;
  border-radius: 30px;
  box-shadow: inset 0 0 8px #f3ab8f;
  } 
#foot{
  position: relative;
  top: 15px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 15px;
  border-radius: 30px;
  box-shadow: 0 0 8px #d9d4e7;
  width: 150px;
  height: 65px;
  background-color: #eed5a5;
  animation-duration: 5s;
}
.button-os{
  position: absolute;
    width: 150px;
    height: 65px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #f0dfd1;
    border: 1px solid rgb(70, 2, 2);
    transition: background-color 2.2s;
    transition-duration: 3s;
    transition: 1.5s;
  }
  .button-os:hover{
    position: absolute;
    top: 30px;
    background-color: #d8a18b;
  }
  .button-os {
    font-size: 15px;
    display: block;
    transition: 1.5s;
    color: rgb(70, 2, 2);
  }
  .button-os a:hover{
    letter-spacing: 5px;
  }
img {
  animation: slideIn 1.6s infinite;
  animation-iteration-count: 1;
  font-size: 20px;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>