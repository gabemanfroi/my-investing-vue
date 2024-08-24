<script lang="ts" setup>
import { useGetUserPortfolioQuery } from '@/composables/queries/useGetUserPortfolioQuery'
import { computed } from 'vue'

const headers = [
  { title: 'Asset', value: 'ticker' },
  { title: 'Class', value: 'className' },
  { title: 'Total Shares', value: 'totalAmount' },
  { title: 'Average Price', value: 'averagePrice' },
  { title: 'Cumulative Total', value: 'cumulativeTotal' }
]

const { result } = useGetUserPortfolioQuery()

const assets = computed(() => {
  return result.value?.getUserPortfolio.portfolio.assets ?? []
})
</script>

<template>
  <v-data-table :headers="headers" :items="assets" item-key="ticker" />
</template>
