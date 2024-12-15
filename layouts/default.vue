<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Navigation Header -->
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <NuxtLink to="/" class="text-2xl font-bold text-indigo-600">
                            ShopName
                        </NuxtLink>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden sm:flex sm:space-x-8">
                        <NuxtLink
                            v-for="(link, index) in navLinks"
                            :key="index"
                            :to="link.path"
                            class="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </div>

                    <!-- Cart & User -->
                    <div class="flex items-center space-x-4">
                        <button class="relative text-gray-600 hover:text-indigo-600">
                            <span class="sr-only">Cart</span>
                            <i class="fas fa-shopping-cart text-xl"></i>
                            <span class="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                0
                            </span>
                        </button>
                        <Profile>  </Profile>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- This is where the page content will be rendered -->
            <NuxtPage />
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">About Us</h3>
                        <p class="mt-4 text-gray-500 text-sm">Your trusted online shopping destination for quality products.</p>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Customer Service</h3>
                        <ul class="mt-4 space-y-4">
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">Shipping Policy</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">Returns & Exchanges</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
                        <ul class="mt-4 space-y-4">
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">FAQ</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">Size Guide</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm text-gray-500 hover:text-indigo-600">Track Order</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Newsletter</h3>
                        <p class="mt-4 text-sm text-gray-500">Subscribe to get special offers and updates.</p>
                        <div class="mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const navLinks = [
    { name: 'Home', path: '/' },
]
</script>