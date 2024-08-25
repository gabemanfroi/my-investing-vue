export const tokenUtil = {
  getToken() {
    return localStorage.getItem('token')
  },
  setToken(token: string) {
    localStorage.setItem('token', token)
  },
  removeToken() {
    localStorage.removeItem('token')
  }
}
