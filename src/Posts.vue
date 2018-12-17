<template>
    <div class="posts">

        <ul v-for="(todo, key) in todos" :key="todo.id">
            <li>{{ todo.name }}</li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'Posts',
  created: function () {
    const db = firebase.firestore();
    const docRef = db.collection('users').doc('user');

  },
  data () {
    return {
      database: null,
      todoRef: null,
      newTodoName: '',
      showTodoType: 'all',
      todos: []
    }
  },
  methods: {
    createTodo: function (newTodoName) {
      if (newTodoName === '') { return }
      console.log(newTodoName)
      this.todoRef.push({
        name: this.newTodoName
      })
      this.newTodoName = ''
    },
    deleteTodo: function (todo) {
      console.log(todo)
      this.todoRef.child(todo).remove()
    }
  }
}

</script>
