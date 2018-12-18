<template>
  <div class="posts">
    <h1>ブログ一覧</h1>
      <ul v-for="(user, key) in users" :key="user.id">
        <li>{{ user.name }}</li>
      </ul>
   </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'Posts',
  created: function () {
    const database = firebase.database()
    const wbewRef = database.ref('write-blog-every-week')

    var _this = this
    wbewRef.on('value', function (snapshot) {
      console.log(snapshot.val())
      _this.users = snapshot.val()
      console.log(_this.users)
    })
  },
  data () {
    return {
      database: null,
      wbewRef: null,
      users: []
    }
  },
}

</script>

<style>

h1 {
  text-align: center
}

</style>
