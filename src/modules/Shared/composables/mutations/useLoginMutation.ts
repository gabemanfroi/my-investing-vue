import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Mutation } from '@/gql/graphql'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { useUserStore } from '@/modules/Shared/stores/userStore'
import { usePortfolioStore } from '@/modules/Shared/stores/portfolioStore'

export const useLoginMutation = () => {
  const router = useRouter()

  const { setUser, setToken } = useUserStore()
  const { setPortfolioId } = usePortfolioStore()

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
      const decoded = tokenUtil.decodeToken(data.login.token)
      setUser({
        userId: decoded.sub,
        email: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName
      })
      setPortfolioId(decoded.portfolioId)
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
