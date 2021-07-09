<template>
  <v-container>
    <v-row
      v-for="blog in blogs"
      :key="blog.id"
      class="text-center"
      justify="center"
      ><v-col cols="6">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><a
                class="black--text"
                style="text-decoration: none;"
                :href="blog.url"
                target="_blank"
                >{{ blog.name }}</a
              >
              - written by {{ blog.user_name }}</v-list-item-title
            >
            <v-list-item-subtitle class="mt-5">
              <a
                class="black--text"
                style="text-decoration: none;"
                :href="blog.entry_link"
                target="_blank"
                >{{ blog.entry_title }}</a
              >
              <v-divider class="mt-12" :inset="inset"></v-divider>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
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
