<template>
  <div class="todolist">
    <h1>Todo List Apps</h1>
    <input @keyup.enter="add" type="text" v-model="title" placeholder="What you want to do?">
    <button @click="add">Add to list</button>
    <ul>
      <li v-for="(x, index) in todos">{{x}}
        <span @click="remove(index)" class="remove">x</span>
      </li>
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
      if(this.title != ''){
        this.todos.unshift(this.title)
        this.title='';
      }
    },
    remove(id) {
      // console.log(id);
      // this.todos.splice(id,1)
      this.$delete(this.todos, id);
    }
  }
};
</script>

<style scoped lang="scss">
  .remove {
    padding: 5px 7px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 5px;
    background: teal;
    color: #fff;
    border-radius: 10px;
  }
</style>