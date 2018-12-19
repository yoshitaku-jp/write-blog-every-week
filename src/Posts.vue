<template>
  <div class="posts">
    <h1>ブログ一覧</h1>
      <ul v-for="(user, key) in users" :key="user.id">
        <li>アカウント名：{{ user.name }}</li>
        <ul v-for="(post, key) in user.posts" :key="post.id">
          <li>記事名： <a v-bind:href="post.url" target="_blank"> {{ post.title }} </a></li>
          <li>投稿された日：{{ post.date }}</li>
        </ul>
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

</style>
