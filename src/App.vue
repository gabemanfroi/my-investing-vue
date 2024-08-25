<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import TheBaseTemplate from '@/TheBaseTemplate.vue'
import TheHeader from '@/modules/Shared/components/TheHeader.vue'

const route = useRoute()
</script>

<template>
  <TheHeader v-if="route.name !== 'login'" />
  <TheBaseTemplate>
    <RouterView />
  </TheBaseTemplate>
</template>
