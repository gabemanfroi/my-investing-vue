import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setContext } from '@apollo/client/link/context'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'
import { useUserStore } from '@/modules/Shared/stores/userStore'
import { usePortfolioStore } from '@/modules/Shared/stores/portfolioStore'

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const token = tokenUtil.getToken()
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  devtools: {
    enabled: true
  }
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

app.use(createPinia())
app.use(router)

const userStore = useUserStore()
userStore.initialize()
const portfolioStore = usePortfolioStore()
portfolioStore.initialize()

app.use(vuetify).mount('#app')
