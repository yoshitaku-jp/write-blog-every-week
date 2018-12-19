<template>
  <div class="posts">
      <ul v-for="(user, key) in users" :key="user.id">
        <div class=box>
          <h3> アカウント名：{{ user.name }} </h3>
          <div v-for="(post, key) in user.posts" :key="post.id">
            <p>
              記事名：<a v-bind:href="post.url" target="_blank"> {{ post.title }} </a>
              <div class="pubdate">投稿日：{{ post.date }}</div>
            </p>
          </div>
        </div>
      </ul>
   </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'Posts',
  created: function () {
    const database = firebase.database()
    const wbewRef = database.ref('users')
    console.log(wbewRef)

    var _this = this
    wbewRef.on('value', snapshot => {
      console.log(snapshot.val())
      _this.users = snapshot.val()
      console.log(_this.users)
    })
  },
  data () {
    return {
      database: null,
      wbewRef: null,
      users: [],
      posts: []
    }
  }
}

</script>

<style>

h1 {
  text-align: center
}

h3 {
  text-align: left
}

.box {
  width: 1200px;
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

.box p{
  margin: 0
}
.pubdate{
  text-align: right
}

</style>
