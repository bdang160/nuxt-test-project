import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('/users.json') // from /public
        if (!res.ok) throw new Error('Failed to fetch users')
        this.users = (await res.json()).data

        console.log(this.users) // shows in terminal
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})