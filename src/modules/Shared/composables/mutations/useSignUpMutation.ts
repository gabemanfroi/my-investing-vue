import { gql } from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { useRouter } from 'vue-router'
import type { Mutation } from '@/gql/graphql'

export const useSignUpMutation = () => {
  const router = useRouter()

  const { mutate: signUp, onDone } = useMutation<Pick<Mutation, 'signUp'>>(gql`
    mutation SignUp($signUpRequest: SignUpRequest!) {
      signUp(signUpRequest: $signUpRequest) {
        token
      }
    }
  `)

  onDone(({ data }) => {
    if (data?.signUp.token) {
      tokenUtil.setToken(data.signUp.token)
      router.push(ROUTES.DASHBOARD.PATH)
    }
  })

  return { signUp }
}
