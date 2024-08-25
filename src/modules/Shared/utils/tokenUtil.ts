import { jwtDecode } from 'jwt-decode'

interface DecodedJwt {
  sub: string
  email: string
  firstName: string
  lastName: string
  portfolioId: string
}

export const tokenUtil = {
  getToken() {
    return localStorage.getItem('token')
  },
  setToken(token: string) {
    localStorage.setItem('token', token)
  },
  removeToken() {
    localStorage.removeItem('token')
  },
  decodeToken(token: string): DecodedJwt {
    return jwtDecode(token)
  }
}
