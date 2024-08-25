import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'

export const useGetUserPortfolioQuery = (userId: string | number) => {
  const { result } = useQuery<Query>(
    gql`
      query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {
        getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {
          portfolio {
            assets {
              ticker
              numberOfShares
              cumulativeTotal
              averagePrice
              className
              currentPrice
            }
          }
        }
      }
    `,
    {
      getUserPortfolioRequest: {
        userId
      }
    }
  )

  return { result }
}
