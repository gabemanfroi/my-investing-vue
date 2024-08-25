import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'

export const useGetUserPortfolioQuery = (userId: string | number) => {
  const router = useRouter()
  const { result, onError, onResult } = useQuery<Query>(
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

  onResult((result) => {
    if (!result.data?.getUserPortfolio?.portfolio) {
      router.push(ROUTES.DASHBOARD.PATH)
    }
  })

  onError(() => {
    router.push(ROUTES.LOGIN.PATH)
    tokenUtil.removeToken()
  })

  return { result }
}
