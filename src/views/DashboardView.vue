<script lang="ts" setup>
import AssetsOverview from '@/modules/Dashboard/components/AssetsOverview.vue'
import PortfolioInvestedAmount from '@/modules/Dashboard/components/PortfolioInvestedAmount.vue'
import PortfolioVariation from '@/modules/Dashboard/components/PortfolioVariation.vue'
</script>

<template>
  <div class="d-flex flex-column ga-1">
    <v-row justify="start">
      <v-col lg="3">
        <PortfolioInvestedAmount />
      </v-col>
      <v-col lg="3">
        <PortfolioVariation />
      </v-col>
    </v-row>
    <v-row style="margin-bottom: 16px">
      <v-col>
        <AssetsOverview />
      </v-col>
    </v-row>
  </div>
</template>
