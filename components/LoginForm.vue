<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          v-model="credentials.email" 
          required
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input 
          type="password" 
          v-model="credentials.password" 
          required
          class="form-control"
        >
      </div>
      <div class="form-check">
        <input 
          type="checkbox" 
          v-model="credentials.remember"
          class="form-check-input"
        >
        <label class="form-check-label">Remember me</label>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
      <NuxtLink to="/register" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 ml-4">Register</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { login } = useSanctumAuth()

const credentials = {
    email: '',  
    password: '',
    remember: false
}
const handleSubmit = async () => {
    try {
        await login(credentials)
    } catch (error) {
        console.error('Error logging in:', error)
    }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
}
.btn {
  margin-top: 1rem;
}
</style>