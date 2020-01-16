<template>
  <div class="todolist">
    <h1>Todo List Apps</h1>
    <input @keyup.enter="add" type="text" v-model="title" placeholder="What you want to do?">
    <button @click="add">Add to list</button>
    <ul>
      <li v-for="x in todos">{{x}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String
  },
  data(){
    return {
      title: '',
      todos: [
        'Go to shop'
      ]
    }
  },
  methods: {
    add(){
      this.todos.push(this.title)
      this.title='';
    }
  }
};
</script>

<style scoped lang="scss">

</style>