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
          <input type="text" placeholder="Product Name" v-model="product.name" class="form-control" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Price" v-model="product.price" class="form-control" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="saveData">Save Data</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fb, db } from "../firebase";
export default {
  name: "Products",
  data() {
    return {
      product: {
        name: null,
        price: null
      }
    };
  },
  methods: {
    saveData() {
      db.collection("products")
        .add(this.product)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>
<style scoped lang="scss">
</style>