<template>
  <v-app>
      <page-header></page-header>
      <router-view></router-view>
      <page-footer></page-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
window.Vue = Vue;
import VueGtm from 'vue-gtm';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

Vue.use(VueGtm, {
  id: 'GTM-W6DPH4H',
  enabled: true
});

module.exports = {
  components: {
    PageHeader: PageHeader,
    PageFooter: PageFooter,  
  },
};
</script>
