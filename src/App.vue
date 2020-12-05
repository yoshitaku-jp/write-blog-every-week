<template>
  <v-app>
    <page-header v-if="$route.name !== 'home'"></page-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <page-footer></page-footer>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueGtm from "vue-gtm";

import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

Vue.use(VueGtm, {
  id: "GTM-W6DPH4H",
  enabled: true,
});

module.exports = {
  components: {
    PageHeader: PageHeader,
    PageFooter: PageFooter,
  },
};
</script>
