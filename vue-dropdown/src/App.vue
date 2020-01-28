<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  body {
    font-family: "montserrat", sans-serif;
    header {
      width: 100vw;
      padding: 15px;
      background: #222;
    }
  }
}
</style>
