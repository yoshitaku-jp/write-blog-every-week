<template>
  <div class="container">
    <ul class="box" v-for="blog in sortedBlogs" :key="blog.id">
      <div class="box-header">
        <h3>{{ blog.name }}</h3>
      </div>
      <div class="box-contents">
        <a v-bind:href="blog.url" target="_blank">{{ blog.title }}</a>
      </div>
      <br>
      <div class="box-footer">
        <img id="icon" :src="blog.image">
        <h3>{{ blog.name }}</h3>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "Posts",
  data() {
    return {
      blogs: []
    };
  },
  created: function() {
    var _this = this;
    const URL = "https://api-wbew-go.netlify.com/blogs.json";

    axios.get(URL).then(function(response) {
      _this.blogs = response.data;
    });
  },
  computed: {
    sortedBlogs: function() {
      return _.orderBy(this.blogs, "published", "desc");
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding-top: 10px;
  margin-top: 90px;
  height: auto;
  padding-bottom: 10px;
  margin-bottom: 80px;
}

.box {
  width: 400px;

  margin: 10px;
  padding: 10px;

  background: #c4c4c4;
}

.box-header h3 {
  text-align: center;
}

.box-footer img {
  width: 48px;
  height: 48px;
}

.box-footer h3 {
  display: inline-block;
  vertical-align: top;
  text-align: right;
}
</style>
