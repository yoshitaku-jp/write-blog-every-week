<template>
  <div class="container">
    <div class="posts">
        <ul v-for="(user, key) in users" :key="user.id">
          <div class=box>
            <div class="box_header">
              <img id="icon" :src="icon_url" >
              <h3> アカウント名：{{ user.name }} </h3>
            </div>
            <div class="box_contents">
              <div v-for="(post, key) in user.posts" :key="post.id">
                <div class="box_content">
                  記事名：<a v-bind:href="post.url" target="_blank"> {{ post.title }} </a>
                  <span class="pubdate">投稿日：{{ post.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'Posts',
  created: function () {
    const database = firebase.database()
    const wbewRef = database.ref('users')


    var _this = this
    const ref = firebase.storage().ref('/icons').child('yasu.JPG');
    const url = ref.getDownloadURL().then(function(url){
      console.log(url)

      _this.icon_url = url;
    });


    wbewRef.on('value', snapshot => {
      _this.users = snapshot.val()
    })
  },
  data () {
    return {
      database: null,
      wbewRef: null,
      ref: null,
      users: [],
      posts: [],
      icon_url: null
    }
  }
}

</script>

<style>
.container {
  display: flex;
  width: 800px;
}

.box_contents {
  display: flex;
  flex-direction: column;
}

.box_content {
  display: flex;
  flex-direction: row;
  align-content: space-around;
}

h1 {
  text-align: center
}

h3 {
  text-align: left
}

.box {
  width: 800px;
  height: 200px;
  margin: 13px;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: left;
  transition: all .3s;
  background-size: cover;
  position: relative;
}

img {
  width: 48px;
  height: 48px;
}

</style>
