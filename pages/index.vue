<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Products</h1>
        
        <div v-if="loading" class="text-center">
            Loading products...
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="product in products" :key="product.id" 
                     class="border rounded-lg p-4 shadow-sm">
                <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover mb-4">
                <h2 class="font-semibold text-lg mb-2">{{ product.title }}</h2>
                <p class="text-gray-600 mb-2 overflow-scroll h-25">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold">${{ product.price }}</span>
                    <button @click="addToCart(product)" 
                                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
definePageMeta({
    middleware: ['sanctum:auth'],
});
const products = ref([])
const loading = ref(true)


const fetchProducts = async () => {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('https://fakestoreapi.com/products')
        products.value = await response.json()
    } catch (error) {
        console.error('Error fetching products:', error)
    } finally {
        loading.value = false
    }
}



const addToCart = (product) => {
    // Implement your add to cart logic here
    console.log('Adding to cart:', product)
}

onMounted(() => {
    fetchProducts()
})
</script>