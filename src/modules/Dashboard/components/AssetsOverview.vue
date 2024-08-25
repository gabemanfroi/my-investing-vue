<script lang="ts" setup>
import { useGetUserPortfolioQuery } from '@/modules/Shared/composables/queries/useGetUserPortfolioQuery'
import { computed } from 'vue'
import { useUserStore } from '@/modules/Shared/stores/userStore'

const headers = [
  { title: 'Asset', value: 'ticker' },
  { title: 'Class', value: 'className' },
  { title: 'Total Shares', value: 'numberOfShares' },
  { title: 'Average Price', value: 'averagePrice' },
  { title: 'Cumulative Total', value: 'cumulativeTotal' },
  { title: 'Current Price', value: 'currentPrice' }
]

const { user } = useUserStore()

const { result } = useGetUserPortfolioQuery(user?.userId as unknown as number)

const assets = computed(() => {
  return result.value?.getUserPortfolio.portfolio.assets ?? []
})
</script>

<template>
  <v-data-table :headers="headers" :items="assets" item-key="ticker" />
</template>
