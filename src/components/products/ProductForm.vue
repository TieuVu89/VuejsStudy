<template>
  <div class="row">
    <div class="col">
      <input type="text" v-model="product">
    </div>
    <div class="col">
      <input type="checkbox" v-model="inStock" id="stock">
      <label for="stock">In stock</label>
    </div>
    <div class="col">
      <button @click="saveProduct()">Save</button>
    </div>
    <div class="col">
      <List/>
      <InStock/>
    </div>
  </div>
</template>
<script>
import List from './ProductList'
import InStock from './InStockList';
export default {
  components: {List, InStock},
  data() {
    return {
      product: "",
      inStock: false
    };
  },
  methods: {
    saveProduct() {
      if (this.product.length) {
        this.$store.dispatch("products/addProduct", {
          name: this.product,
          inStock: this.inStock
        });
        this.product = "";
        this.inStock = false;
      }
    }
  }
};
</script>