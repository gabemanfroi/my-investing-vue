import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Mutation } from '@/gql/graphql'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { useRouter } from 'vue-router'

export const useLoginMutation = () => {
  const router = useRouter()

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
      tokenUtil.setToken(data.login.token)
      router.push('/dashboard')
    }
  })

  onError((error) => {
    console.error('Login failed:', error)
  })

  return { login }
}
