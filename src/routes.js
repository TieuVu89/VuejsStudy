import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import Binding from './components/Binding.vue';
import Redirect from './components/Redirect.vue';
import Event from './components/Event.vue';
import Rendering from './components/Rendering.vue';
import ProfilePage from './components/props,emmitEvents/ProfilePage.vue';
import Vuex from './components/Vuex.vue';
import ProductForm from './components/products/ProductForm.vue';

const routes = [
    { path: '/computed', component: Computed },
    { path: '/watch', component: Watch },
    { path: '/binding', component: Binding },
    { path: '/redirect', component: Redirect },
    { path: '/event', component: Event },
    { path: '/rendering', component: Rendering },
    { path: '/props', component: ProfilePage },
    { path: '/vuex', component: Vuex },
    { path: '/vuex-ver2', component: ProductForm },
];
export default routes;