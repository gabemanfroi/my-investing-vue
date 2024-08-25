<script lang="ts" setup>
import { usePortfolioStore } from '@/modules/Shared/stores/portfolioStore'
import { useGetPortfolioInvestedAmountQuery } from '@/modules/Shared/composables/queries/useGetPortfolioInvestedAmountQuery'

const { portfolio } = usePortfolioStore()

const { result } = useGetPortfolioInvestedAmountQuery(portfolio?.portfolioId as unknown as string)
</script>

<template>
  <v-card
    :subtitle="result?.getPortfolioInvestedAmount.totalInvestedAmount"
    class="mx-auto"
    prepend-icon="mdi-currency-usd"
    title="Total Invested"
    variant="tonal"
  />
</template>

<style scoped></style>
