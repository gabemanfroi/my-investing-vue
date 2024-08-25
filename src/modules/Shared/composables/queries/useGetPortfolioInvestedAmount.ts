import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'

export const useGetPortfolioInvestedAmount = (portfolioId: string) => {
  const { result } = useQuery<Pick<Query, 'getPortfolioInvestedAmount'>>(
    gql`
      query GetPortfolioInvestedAmount(
        $getPortfolioInvestedAmountRequest: GetPortfolioInvestedAmountRequest!
      ) {
        getPortfolioInvestedAmount(
          getPortfolioInvestedAmountRequest: $getPortfolioInvestedAmountRequest
        ) {
          totalInvestedAmount
        }
      }
    `,
    {
      getPortfolioInvestedAmountRequest: {
        portfolioId
      }
    }
  )

  return { result }
}
