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
        v-for="blog in sortedBlogs"
        :key="blog.id"
      >
        <v-list-item>
          <v-avatar><v-img :src="blog.icon"></v-img></v-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">
              <a
                class="black--text"
                style="text-decoration: none;"
                :href="blog.url"
                target="_blank"
                >{{ blog.blogtitle }}</a
              >
            </v-list-item-title>

            <v-list-item-subtitle>by {{ blog.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <a
            class="black--text"
            style="text-decoration: none;"
            :href="blog.url"
            target="_blank"
            >{{ blog.title }}</a
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
    const URL = 'https://api-wbew-go.netlify.app/blogs.json';

    axios.get(URL).then(function(response) {
      _this.blogs = response.data;
    });
  },
  computed: {
    sortedBlogs: function() {
      return _.orderBy(this.blogs, 'published', 'desc');
    }
  }
};
</script>
<style scoped></style>
