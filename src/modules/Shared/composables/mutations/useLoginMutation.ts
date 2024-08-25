import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Mutation } from '@/gql/graphql'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { jwtDecode } from 'jwt-decode'
import { useUserStore } from '@/modules/Shared/stores/userStore'

export const useLoginMutation = () => {
  const router = useRouter()

  const { setUser, setToken } = useUserStore()

  const {
    mutate: login,
    onDone,
    onError
  } = useMutation<Pick<Mutation, 'login'>>(gql`
    mutation Login($email: String!, $password: String!) {
      login(loginRequest: { email: $email, password: $password }) {
        token
      }
    }
  `)

  onDone(({ data }) => {
    if (data?.login.token) {
      const decoded: { sub: string; email: string; firstName: string; lastName: string } =
        jwtDecode(data.login.token)
      setUser({
        userId: decoded.sub,
        email: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName
      })
      setToken(data.login.token)
      tokenUtil.setToken(data.login.token)
      router.push(ROUTES.DASHBOARD.PATH)
    }
  })

  onError((error) => {
    console.error('Login failed:', error)
  })

  return { login }
}
