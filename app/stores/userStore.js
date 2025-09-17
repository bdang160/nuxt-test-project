import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchUser() {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('/users.json') // from /public
        if (!res.ok) throw new Error('Failed to fetch user')
        this.user = await res.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})