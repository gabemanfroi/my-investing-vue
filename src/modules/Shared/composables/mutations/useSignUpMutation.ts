import { gql } from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { useRouter } from 'vue-router'
import type { Mutation } from '@/gql/graphql'
import { jwtDecode } from 'jwt-decode'
import { useUserStore } from '@/modules/Shared/stores/userStore'

export const useSignUpMutation = () => {
  const router = useRouter()
  const { setUser, setToken } = useUserStore()

  const { mutate: signUp, onDone } = useMutation<Pick<Mutation, 'signUp'>>(gql`
    mutation SignUp($signUpRequest: SignUpRequest!) {
      signUp(signUpRequest: $signUpRequest) {
        token
      }
    }
  `)

  onDone(async ({ data }) => {
    if (data?.signUp.token) {
      const decoded: { sub: string; email: string; firstName: string; lastName: string } =
        jwtDecode(data.signUp.token)
      setUser({
        userId: decoded.sub,
        email: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName
      })
      setToken(data.signUp.token)
      tokenUtil.setToken(data.signUp.token)
      await router.push(ROUTES.DASHBOARD.PATH)
    }
  })

  return { signUp }
}
