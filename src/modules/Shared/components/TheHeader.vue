<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'

const router = useRouter()
const route = useRoute()

const tabs = [
  { name: 'Dashboard', value: 1, route: '/dashboard' },
  { name: 'Operations', value: 2, route: '/operations' }
]

const tab = ref(tabs.find((t) => t.route === route.path)?.value || 1)

watch(tab, (newVal) => {
  const selectedTab = tabs.find((t) => t.value === newVal)
  if (selectedTab) {
    router.push(selectedTab.route)
  }
})

const logout = () => {
  tokenUtil.removeToken()
  router.push('/login')
}
</script>

<template>
  <v-row class="pa-4" justify="space-around">
    <v-col>
      <h1 class="text-uppercase">My-Investing</h1>
    </v-col>
    <v-col>
      <v-row class="nav-container" justify="center">
        <v-tabs v-model="tab">
          <v-tab v-for="t in tabs" :key="t.value" :value="t.value">
            {{ t.name }}
          </v-tab>
        </v-tabs>
      </v-row>
    </v-col>
    <v-col>
      <v-row align-content="center" class="right-container fill-height" justify="end">
        <v-btn elevation="0" icon="mdi-power" v-on:click="logout"></v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.nav-container,
.right-container {
  margin: unset;
}
</style>
