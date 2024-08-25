<script lang="ts" setup>
import { usePortfolioStore } from '@/modules/Shared/stores/portfolioStore'
import { useGetPortfolioVariationQuery } from '@/modules/Shared/composables/queries/useGetPortfolioVariationQuery'

const { portfolio } = usePortfolioStore()

const { result } = useGetPortfolioVariationQuery(portfolio?.portfolioId as unknown as string)

const variationSubtitle = (result: any) => {
  return (
    result?.getPortfolioVariation.valueVariation +
    '(' +
    result?.getPortfolioVariation.percentageVariation +
    '%' +
    ')'
  )
}
</script>

<template>
  <v-card
    :subtitle="variationSubtitle(result)"
    class="mx-auto"
    prepend-icon="mdi-finance"
    title="Profit / Loss"
    variant="tonal"
  />
</template>

<style scoped></style>
