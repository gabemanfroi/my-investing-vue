import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Mutation } from '@/gql/graphql'

export const useLoginMutation = () => {
  const { mutate: login } = useMutation<Pick<Mutation, 'login'>>(gql`
    mutation Login($email: String!, $password: String!) {
      login(loginRequest: { email: $email, password: $password }) {
        token
      }
    }
  `)

  return { login }
}
