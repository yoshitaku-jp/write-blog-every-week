<template>
    <v-container fluid>
      <v-row
          align-content="space-around"
          justify="space-around"
          class="grey lighten-5"
        >
      <v-card
        class="grey ma-2"
        width="400px"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <v-list-item>
          <v-avatar><v-img :src="blog.user_icon"></v-img></v-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">
              <a
                class="black--text"
                style="text-decoration: none;"
                :href="blog.url"
                target="_blank"
                >{{ blog.name }}</a
              >
            </v-list-item-title>

            <v-list-item-subtitle>by {{ blog.user_name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <a
            class="black--text"
            style="text-decoration: none;"
            :href="blog.entry_url"
            target="_blank"
            >{{ blog.entry_title }}</a
          >
        </v-card-text>
      </v-card>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Posts',
  data() {
    return {
      blogs: []
    };
  },
  created: function() {
    var _this = this;
    const URL = 'https://api-wbew.netlify.app/blogs.json';

    axios.get(URL).then(function(response) {
      _this.blogs = response.data;
    });
  },
};
</script>

<style scoped></style>

