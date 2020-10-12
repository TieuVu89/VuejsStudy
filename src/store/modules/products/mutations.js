import Vue from 'vue'
export const mutations = {
    setProducts(state, products) {
        Vue.set(state, 'products', products);
    },
    addProduct(state, product) {
        let products = state.products;
        products.push(product);
        Vue.set(state, 'products', products);
    },
  };