import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true
      }
    }
  }
}

export default config
