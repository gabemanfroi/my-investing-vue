import type { Query } from '@/gql/graphql'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export const useGetPortfolioVariationQuery = (portfolioId: string) => {
  const { result } = useQuery<Pick<Query, 'getPortfolioVariation'>>(
    gql`
      query GetPortfolioVariation($getPortfolioVariationRequest: GetPortfolioVariationRequest!) {
        getPortfolioVariation(getPortfolioVariationRequest: $getPortfolioVariationRequest) {
          percentageVariation
          valueVariation
        }
      }
    `,
    {
      getPortfolioVariationRequest: { portfolioId }
    }
  )

  return { result }
}
