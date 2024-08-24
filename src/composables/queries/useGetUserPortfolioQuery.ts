import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'

export const useGetUserPortfolioQuery = () => {
  const { result } = useQuery<Query>(gql`
    query GetUserPortfolio {
      getUserPortfolio(getUserPortfolioRequest: { userId: 8 }) {
        portfolio {
          assets {
            ticker
            totalAmount
            cumulativeTotal
            averagePrice
            className
            currentPrice
          }
        }
      }
    }
  `)

  return { result }
}
