import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export const useRegisterOperationMutation = () => {
  const { mutate: registerOperation } = useMutation<{ registerOperation: boolean }>(gql`
    mutation RegisterOperation($operation: OperationInput!, $portfolioId: ID!) {
      registerOperation(
        registerOperationInput: { operation: $operation, portfolioId: $portfolioId }
      )
    }
  `)

  return { registerOperation }
}
