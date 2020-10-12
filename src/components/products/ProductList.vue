<template>
    <div v-if="products.length">
        <h1>All products</h1>
        <ul class="list">
            <li v-for="product in products" :key="product.name">
                {{ product.name }}
                <p v-if="product.inStock">In stock</p>
                <p v-else>Not in stock</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState('products', [
                'products',
            ]),
        }
    }
</script>