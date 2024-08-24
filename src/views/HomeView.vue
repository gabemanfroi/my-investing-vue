<script lang="ts" setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'

const { result } = useQuery<Query>(gql`
  query GetUserPortfolio {
    getUserPortfolio(getUserPortfolioRequest: { userId: 8 }) {
      portfolio {
        assets {
          ticker
        }
      }
    }
  }
`)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
