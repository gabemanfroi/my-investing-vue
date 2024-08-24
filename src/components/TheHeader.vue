<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabs = [
  { name: 'Dashboard', value: 1, route: '/dashboard' },
  { name: 'Operations', value: 2, route: '/operations' },
  { name: 'Settings', value: 3, route: '/settings' }
]

const tab = ref(tabs.find((t) => t.route === route.path)?.value || 1)

watch(tab, (newVal) => {
  const selectedTab = tabs.find((t) => t.value === newVal)
  if (selectedTab) {
    router.push(selectedTab.route)
  }
})
</script>

<template>
  <v-row justify="space-between">
    <v-col>
      <h1>My-Investing</h1>
    </v-col>
    <v-col>
      <v-row class="nav-container" justify="end">
        <v-tabs v-model="tab">
          <v-tab v-for="t in tabs" :key="t.value" :value="t.value">
            {{ t.name }}
          </v-tab>
        </v-tabs>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.nav-container {
  margin: unset;
}
</style>
