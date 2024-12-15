import { defineStore } from 'pinia'

export const useMyAuthStoreStore = defineStore({
  id: 'myAuthStoreStore',
  state: () => ({token: null as string | null,}),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  }
})
