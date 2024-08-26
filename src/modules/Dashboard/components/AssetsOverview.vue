<script lang="ts" setup>
import { useGetUserPortfolioQuery } from '@/modules/Shared/composables/queries/useGetUserPortfolioQuery'
import { computed } from 'vue'
import { useUserStore } from '@/modules/Shared/stores/userStore'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import router from '@/router'

const headers = [
  { title: 'Asset', value: 'symbol' },
  { title: 'Class', value: 'className' },
  { title: 'Total Shares', value: 'numberOfShares' },
  { title: 'Average Price', value: 'averagePrice' },
  { title: 'Cumulative Total', value: 'cumulativeTotal' },
  { title: 'Current Price', value: 'currentPrice' }
]

const { user } = useUserStore()

const { result } = useGetUserPortfolioQuery(
  user?.userId as unknown as number,
  (result) => {
    if (!result.data?.getUserPortfolio?.portfolio) {
      router.push(ROUTES.DASHBOARD.PATH)
    }
  },
  () => {
    router.push(ROUTES.LOGIN.PATH)
    tokenUtil.removeToken()
  }
)

const assets = computed(() => {
  return result.value?.getUserPortfolio.portfolio.assets ?? []
})
</script>

<template>
  <v-card>
    <v-card-title class="text-uppercase">Assets</v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="assets" item-key="symbol" />
    </v-card-text>
  </v-card>
</template>
