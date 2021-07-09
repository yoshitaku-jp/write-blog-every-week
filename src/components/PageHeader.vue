<template>
  <v-app-bar app>
    <v-toolbar-title class="display-2 font-weight-black ">
      <router-link class="black--text text-decoration-none" to="/">
        Write Blog Every Week
      </router-link>
    </v-toolbar-title>
    <v-tab to="/">Top</v-tab>
    <v-tab to="/posts">Posts</v-tab>
  </v-app-bar>
</template>

<script>
export default {
  name: 'page-header'
};
</script>
