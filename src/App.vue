<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheBaseTemplate from '@/TheBaseTemplate.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <TheBaseTemplate>
    <RouterView />
  </TheBaseTemplate>
</template>
