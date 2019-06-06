<template>
  <div class="container">
    <ul class="box" v-for="info in sortedInfos" :key="info.id">
      <div class="box-header">
        <a v-bind:href="info.blogurl" target="_blank">
          <h3>{{ info.blogtitle }}</h3>
        </a>
      </div>
      <div class="box-contents">
        <img id="thumbnail" :src="info.enclosures">
        <a v-bind:href="info.url" target="_blank">{{ info.title }}</a>
      </div>
      <br>
      <div class="box-footer">
        <img id="icon" :src="info.icon">
        <h3>{{ info.name }}</h3>
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
      infos: []
    };
  },
  created: function() {
    var _this = this;
    const URL = "https://api-wbew-go.netlify.com/blogs.json";

    axios.get(URL).then(function(response) {
      _this.infos = response.data;
    });
  },
  computed: {
    sortedInfos: function() {
      console.log(_.orderBy(this.infos, "published", "desc"));
      return _.orderBy(this.infos, "published", "desc");
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

.box-header a {
  text-decoration: none;
}

.box-header h3 {
  text-align: center;

  font-size: 24px;
  color: #636363;
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
