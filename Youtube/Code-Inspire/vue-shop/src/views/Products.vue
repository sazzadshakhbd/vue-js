<template>
  <div class="products mt-5">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/products.svg" alt class="img-fluid" />
          </div>
        </div>
      </div>
      <hr />
      <div class="product-test">
        <div class="form-group">
          <input type="text" placeholder="Product Name" v-model="name" class="form-control" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Price" v-model="price" class="form-control" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="saveData">Save Data</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products"
};
</script>
<style scoped lang="scss">
</style>