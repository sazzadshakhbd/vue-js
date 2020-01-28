<template>
  <nav>
    <div class="menu-item">
      <a href="#">Home</a>
    </div>
    <div class="menu-item">
      <a href="#">About</a>
    </div>
    <DropDown title="services" :items="services" />
    <div class="menu-item">
      <a href="#">Contact</a>
    </div>
  </nav>
</template>
<script>
import DropDown from "./DropDown";
export default {
  name: "Navbar",
  components: {
    DropDown
  },
  data() {
    return {
      services: [
        {
          title: "Web",
          link: "#"
        },
        {
          title: "Design",
          link: "#"
        },
        {
          title: "Videos",
          link: "#"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  .menu-item {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    display: flex;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    &.active,
    &:hover {
      background-color: #444;
      border-bottom-color: #ff5858;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
