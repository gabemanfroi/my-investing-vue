<script lang="ts" setup>
import RegisterOperationsDialog from '@/modules/Operations/components/RegisterOperationsDialog.vue'
</script>

<template>
  <v-row align="center" class="operations-page-title-container" justify="space-between">
    <h1 class="text-black text-uppercase">Operations</h1>
    <RegisterOperationsDialog />
  </v-row>
</template>

<style scoped>
.operations-page-title-container {
  margin: unset;
}
</style>
