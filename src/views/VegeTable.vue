<template>
  <div id="app">
    <ul>
      <li>{{ yasai }}</li>
    </ul>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import fd from '../fd.json';
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
        return {
      fdData: fd,
    }
  },
    components: {
    FooterComp,
  },
}
</script>