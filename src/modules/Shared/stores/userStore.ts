import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | {
      userId: string
      email: string
      firstName: string
      lastName: string
    },
    token: null as null | string
  }),
  actions: {
    setUser(userData: { userId: string; email: string; firstName: string; lastName: string }) {
      this.user = userData
    },
    setToken(token: string) {
      this.token = token
    },
    clearUser() {
      this.user = null
      this.token = null
    },
    initialize() {
      const token = tokenUtil.getToken()
      if (token) {
        try {
          const decoded: { sub: string; email: string; firstName: string; lastName: string } =
            jwtDecode(token)
          this.setUser({
            userId: decoded.sub,
            email: decoded.email,
            firstName: decoded.firstName,
            lastName: decoded.lastName
          })
          this.setToken(token)
        } catch (error) {
          console.error('Invalid token', error)
          this.clearUser()
        }
      }
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token
  }
})
