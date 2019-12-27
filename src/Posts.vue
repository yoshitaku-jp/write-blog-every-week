<template>
  <v-card>
    <v-layout row wrap>
      <v-flex
        class="justify-md-space-around"
        v-for="blog in sortedBlogs"
        :key="blog.id"
      >
        <v-card class="grey" :width="400">
          <div class="box-header">
            <v-card-title class="headline ">
              <a
                class="black--text text-decoration-none"
                v-bind:href="blog.blogurl"
                target="_blank"
                >{{ blog.blogtitle }}</a
              >
            </v-card-title>
          </div>
          <div class="box-content">
            <v-card-text>
              <v-list-item-subtitle class="subtitle-1 text-center">今週のブログ</v-list-item-subtitle>
              <hr />
              <a
                class="title black--text text-decoration-none"
                v-bind:href="blog.url"
                target="_blank"
                >{{ blog.title }}</a
              >
            </v-card-text>
          </div>
          <div class="box-footer">
            <h3>{{ blog.name }}</h3>
            <v-img
              id="icon"
              width="48px"
              height="48px"
              :src="blog.icon"
            ></v-img>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
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
    const URL = 'https://api-wbew-go.netlify.com/blogs.json';

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
