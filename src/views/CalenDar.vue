<template>
  <div id='app'>
    <v-menu v-model="menu">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field v-model="text" v-bind="attrs" v-on="on" readonly clearable>
        </v-text-field>
      </template>
      <v-date-picker v-model="picker" @input="formatDate(picker)">
      </v-date-picker>
    </v-menu>
    {{ picker }}         
  <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
      menu: "",
      text: "",
      picker: "",
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}${month}${day}`;
      this.menu = false;
      return;
    },
  },
    components: {
      FooterComp,
  }
}
</script>

<style scoped>
#app {
  margin-top: 60px;
}
</style>