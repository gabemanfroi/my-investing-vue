import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import type { Query } from '@/gql/graphql'
import { computed } from 'vue'

export function useListAssetsQuery() {
  const { result } = useQuery<Query>(gql`
    query ListAssets {
      listAssets(listAssetsRequest: { query: "" }) {
        assets {
          symbol
          id
        }
      }
    }
  `)

  const assets = computed(() => {
    return result?.value?.listAssets?.assets ?? []
  })

  return { assets }
}
