import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'

export const useGetUserPortfolioQuery = (
  userId: string | number,
  onResultCb: (result: any) => void = () => {},
  onErrorCb: (result: any) => void = () => {}
) => {
  const { result, onError, onResult } = useQuery<Pick<Query, 'getUserPortfolio'>>(
    gql`
      query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {
        getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {
          portfolio {
            assets {
              symbol
              numberOfShares
              cumulativeTotal
              averagePrice
              className
              currentPrice
            }
            portfolioId
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

  onResult(onResultCb)

  onError(onErrorCb)

  return { result }
}
