<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-flex v-for="blog in sortedBlogs" :key="blog.id">
        <v-card class="grey ma-2 flexcard" width="400px" height="260px">
          <v-card-title class="subtitle justify-center">
            <v-list-tile :href="blog.blogurl" target="_blank">{{
              blog.blogtitle
            }}</v-list-tile>
          </v-card-title>

          <v-card-text class="grow headline">
            <v-list-tile :href="blog.url" target="_blank">{{
              blog.title
            }}</v-list-tile>
          </v-card-text>

          <v-card-actions>
            <span>
              <v-card-media
                width="48px"
                height="48px"
                :src="blog.icon"
              ></v-card-media>
            </span>
            <span>
              <v-card-text>{{ blog.name }}</v-card-text>
            </span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
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
      console.log(_.orderBy(this.blogs, 'published', 'desc'));
      return _.orderBy(this.blogs, 'published', 'desc');
    }
  }
};
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
