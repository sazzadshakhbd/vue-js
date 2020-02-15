<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alert mode="primary">First- Alert</alert>
    <alert mode="success">Second- Alert </alert>
    <alert mode="danger">Third- Alert </alert>
    <div>
      <input type="text" class="form-control" v-model="lastName" placeholder="Your nice name...">
      <p>
        Welcome, {{lastName}}
      </p>
    </div>
    <div style="margin-bottom:10px;">
      <button @click="clickMe">Click Me</button>
    </div>
    <div style="margin-bottom:10px;">
      <input type="text" @keyup.enter="doSomething">
    </div>
    <ul>
      <li v-for="person in students">{{person}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      lastName: " Ali",
      students: [
        'adib',
        'sazzad',
        'rahim'
      ]
    }
  },
  methods: {
    clickMe: function() {
      console.log("H1")
    },
    doSomething: function(){
      console.log("h1")
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>