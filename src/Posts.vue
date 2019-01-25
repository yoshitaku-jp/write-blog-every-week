<template>
  <span class="container">
    <ul class="box" v-for="(user, key) in blogs" :key="user.id">
      <img id="icon" :src="user.icon">
      <h3>{{ user.name }}</h3>

      <div class="post" v-for="(post, key) in user.posts" :key="post.id">
        <a v-bind:href="post.url" target="_blank">{{ post.title }}</a>
      </div>
    </ul>
  </span>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      blogs: []
    };
  },
  created: function() {
    var _this = this;
    const URL = "https://api-wbew.netlify.com/blogs.json";

    axios.get(URL).then(function(response) {
      _this.blogs = response.data;
      console.log(_this.blogs);
    });
  },
  computed: {
    sorted: function() {
      return _.orderBy(this.blogs, "pubdate_timestamp", this.order);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}

h1 {
  text-align: center;
}

h3 {
  text-align: left;
}

img {
  width: 48px;
  height: 48px;
}

.posts {
  border: 1px solid black;
}

.box {
  width: 400px;
  margin: 10px;
  padding: 10px;

  border: 1px solid black;
}

.box h3 {
  display: inline-block;
  vertical-align: top;
  text-align: right;
}

.post {
  margin: 5px;
}
</style>
