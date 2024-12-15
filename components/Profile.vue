<template>
  <div>
    <button @click="toggleDropdown">
      {{ user?.name || 'Hey' }}
      <span class="icon-chevron-down"></span>
    </button>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <p v-if="user?.name">
        Logged in as: <strong>{{ user.name }}</strong> ({{ user.email }})
      </p>
      <button @click="logout">
        <span class="icon-arrow-left-start-on-rectangle"></span>
        Logout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { User } from '~~/models/user'

const { user, logout: sanctumLogout } = useSanctumAuth<User>()

const logout = () => {
  sanctumLogout().then(() => {
    window.location.reload()
  })
}



const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<style scoped>
.button {
  background-color: white;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
}

.icon-chevron-down::before {
  content: '▼';
}

.icon-arrow-left-start-on-rectangle::before {
  content: '←';
}
</style>
