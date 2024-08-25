<script lang="ts" setup>
import { usePortfolioStore } from '@/modules/Shared/stores/portfolioStore'
import { useGetPortfolioInvestedAmount } from '@/modules/Shared/composables/queries/useGetPortfolioInvestedAmount'

const { portfolio } = usePortfolioStore()

const { result } = useGetPortfolioInvestedAmount(portfolio?.portfolioId as unknown as string)
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
