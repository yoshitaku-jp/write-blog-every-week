<template>
  <v-app-bar app class="text-center d-flex">
    <v-btn to="/" text>
      <v-toolbar-title class="">Write Blog Every Week</v-toolbar-title>
    </v-btn>
    <v-tabs>
      <v-tab to="/">Top</v-tab>
      <v-tab to="/posts">Posts</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: "page-header",
};
</script>
