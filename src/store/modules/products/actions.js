export const actions = {
  getProducts(context) {
      this.axios.get('/api/products')
          .then((response) => {
              let products = response.data.data;
              context.commit('setProducts', products);
          });
  },
  addProduct(context, product) {
      context.commit('addProduct', product);
  }
};