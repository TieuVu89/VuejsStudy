import Vue from "vue";
import Vuex from "vuex";
import {products} from './modules/products';
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    user: {
        username: 'Doan',
        fullName: 'Tran Chi Doan'
      }
 },
 getters: {
    firstName: state => {
        return state.user.fullName.split(' ')[0]
      },
    lastName (state, getters) {
        return state.user.fullName.replace(getters.firstName, '');
   }
 },
 mutations: {
    changeName (state, payload) {
      state.user.fullName = payload
    }
 },
 actions: {
    changeName (context, payload) {
      setTimeout(() => {
        context.commit("changeName", payload);
      }, 5000);
    }
 
},
modules: {
  products,
}
});