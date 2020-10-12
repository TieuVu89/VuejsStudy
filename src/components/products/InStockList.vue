<template>
    <div v-if="inStock.length">
        <h1>Products in stock</h1>
        <ul class="list">
            <li v-for="product in inStock" :key="product.name">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters('products', [
                'inStock',
            ]),
        }
    }
</script>