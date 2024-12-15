<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input 
              type="text" 
              v-model="username" 
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Username"
            >
          </div>
          <div>
            <input 
              type="email" 
              v-model="email" 
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Email address"
            >
          </div>
          <div>
            <input 
              type="password" 
              v-model="password" 
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Password"
            >
          </div>
          <div>
            <input 
              type="password" 
              v-model="confirmPassword" 
              required 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Confirm Password"
            >
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Registering...' : 'Register' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sanctumConfig = useSanctumConfig()
const sanctumFetch = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()
const loading = ref(false)
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }

  loading.value = true
  try {
    await sanctumFetch('/register', {
      method: 'POST',
      body: {
        name: username.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value
      }
    })
    
    await refreshIdentity()
    navigateTo(sanctumConfig.redirect.onGuestOnly || '/')
  } catch (error) {
    const err = useSanctumError(error)
    if (err.isValidationError) {
      console.error('Validation error:', err.bag)
      alert('Please check your input and try again.')
    } else {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
    }
  } finally {
    loading.value = false
  }
}
</script>
