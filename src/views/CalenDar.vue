<template>
  <div id='app'>
    <!-- <v-menu v-model="menu">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field v-model="text" v-bind="attrs" v-on="on" readonly clearable>
        </v-text-field>
      </template>
      <v-date-picker v-model="picker" @input="formatDate(picker)">
      </v-date-picker>
    </v-menu>
    {{ picker }} -->
        <v-calendar :attributes="attributes" @dayclick="onDayClick"></v-calendar>
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

      attributes: [
        {highlight: {color:'blue', fillMode: 'solid',},
        dates: ['2022-4-15'],
        popover: {
          label: 'アドカレ担当日',
        },
    },
  ],

    };
  },
  methods: {
    onDayClick(day) {
      console.log(day.id)
      this.attributes.push(
        {
          highlight: {color:'blue', fillMode: 'solid',},
          dates: [day.id],
        popover: {
          label: '寝る',
        },
        })
      this.$router.push()
    },
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