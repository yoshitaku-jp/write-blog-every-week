<template>
  <v-container class="d-flex flex-wrap ">
    <v-row>
      <v-col v-for="blog in blogs" :key="blog.id">
        <v-card class="d-flex flex-column grey" width="350px">
          <v-list-item>
            <v-avatar class="ma-2"><v-img :src="blog.icon"></v-img></v-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <a
                  class="black--text"
                  style="text-decoration: none;"
                  :href="blog.url"
                  target="_blank"
                  >{{ blog.name }}</a
                >
              </v-list-item-title>

              <v-list-item-subtitle class="pl-4"
                ><span class="font-italic">written by</span>
                <span class="font-weight-bold">{{
                  blog.user_name
                }}</span></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <a
              class="black--text"
              style="text-decoration: none;"
              :href="blog.entry_link"
              target="_blank"
              >{{ blog.entry_title }}</a
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "Posts",
  data() {
    return {
      blogs: [],
    };
  },
  created: function() {
    var _this = this;
    const URL = "https://api-wbew.netlify.app/blogs.json";

    axios.get(URL).then(function(response) {
      _this.blogs = response.data;
    });
  },
};
</script>

<style scoped></style>
