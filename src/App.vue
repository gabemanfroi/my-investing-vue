<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import TheBaseTemplate from '@/TheBaseTemplate.vue'
import TheHeader from '@/modules/Shared/components/TheHeader.vue'
import { ROUTES } from '@/modules/Shared/core/constants/routes'
import { computed } from 'vue'

const route = useRoute()

const routesWithoutHeader = [ROUTES.LOGIN.NAME, ROUTES.SIGN_UP.NAME]

const shouldRenderHeader = computed(() => {
  if (!route.name) {
    return false
  }
  return !routesWithoutHeader.includes(route.name as string)
})
</script>

<template>
  <TheHeader v-if="shouldRenderHeader" />
  <TheBaseTemplate>
    <RouterView />
  </TheBaseTemplate>
</template>
