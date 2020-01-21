<template>
<div class="admin">
  <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#" style="position: absolute;left: 5px;top: 5px;">
      <i class="fas fa-bars"></i>
    </a>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <!-- sidebar-brand  -->
        <div class="sidebar-item sidebar-brand justify-content-between">
          <div>
            <a href="#">Vue Shop</a>
          </div>
          <div id="close-sidebar" @click="closeMenu" style="cursor:pointer;">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-item sidebar-header d-flex align-items-center">
          <div class="user-pic">
            <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
          </div>
          <div class="user-info text-left">
            <span class="user-name">Jhon
              <strong>Smith</strong>
            </span>
            <span class="user-role"> Aministrator </span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-item sidebar-search">
          <div>
            <div class="input-group">
              <input type="text" class="form-control search-menu" placeholder="Search...">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- sidebar-menu  -->
        <div class=" sidebar-item sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>Menu</span>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-chart-line"></i>
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-amazon"></i>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-shopping-cart"></i>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-power-off"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>

    </nav>
    <!-- sidebar-content  -->
    <main class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="form-group col-md-12">
            <h2>Sidebar Tempalte</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum consequatur, beatae impedit eius libero placeat facilis dolore neque non voluptatum maiores officia sequi cupiditate voluptates quas fugit nihil nemo.</p>
          </div>
        </div>
      </div>
    </main>
    <!-- page-content" -->
  </div>
  <!-- page-wrapper -->

</div>
</template>

<script>


export default {
  name: "admin",
  data() {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    }
  },
};
</script>

<style>

</style>
