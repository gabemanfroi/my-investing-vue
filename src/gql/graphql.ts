/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from '@vue/composition-api'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Asset = {
  __typename?: 'Asset'
  class: AssetClass
  id: Scalars['ID']['output']
  symbol: Scalars['String']['output']
}

export type AssetClass = {
  __typename?: 'AssetClass'
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type CreateAssetClassInput = {
  name: Scalars['String']['input']
}

export type CreateAssetInput = {
  assetClassId: Scalars['ID']['input']
  symbol: Scalars['String']['input']
}

export type GetPortfolioInvestedAmountRequest = {
  portfolioId: Scalars['ID']['input']
}

export type GetPortfolioInvestedAmountResponse = {
  __typename?: 'GetPortfolioInvestedAmountResponse'
  totalInvestedAmount: Scalars['Float']['output']
}

export type GetPortfolioVariationRequest = {
  portfolioId: Scalars['ID']['input']
}

export type GetPortfolioVariationResponse = {
  __typename?: 'GetPortfolioVariationResponse'
  percentageVariation: Scalars['Float']['output']
  valueVariation: Scalars['Float']['output']
}

export type GetUserPortfolioRequest = {
  userId: Scalars['ID']['input']
}

export type GetUserPortfolioResponse = {
  __typename?: 'GetUserPortfolioResponse'
  portfolio: Portfolio
}

export type ListAssetsClassesRequest = {
  query: Scalars['String']['input']
}

export type ListAssetsClassesResponse = {
  __typename?: 'ListAssetsClassesResponse'
  assetClasses: Array<Maybe<AssetClass>>
}

export type ListAssetsRequest = {
  query: Scalars['String']['input']
}

export type ListAssetsResponse = {
  __typename?: 'ListAssetsResponse'
  assets: Array<Maybe<Asset>>
}

export type LoginRequest = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  token: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAsset: Scalars['Boolean']['output']
  createAssetClass: Scalars['Boolean']['output']
  createPortfolio: Scalars['Boolean']['output']
  login: LoginResponse
  registerOperation: Scalars['Boolean']['output']
  signUp: SignUpResponse
}

export type MutationCreateAssetArgs = {
  createAssetInput?: InputMaybe<CreateAssetInput>
}

export type MutationCreateAssetClassArgs = {
  createAssetClassInput?: InputMaybe<CreateAssetClassInput>
}

export type MutationLoginArgs = {
  loginRequest: LoginRequest
}

export type MutationRegisterOperationArgs = {
  registerOperationInput?: InputMaybe<RegisterOperationInput>
}

export type MutationSignUpArgs = {
  signUpRequest: SignUpRequest
}

export type Operation = {
  __typename?: 'Operation'
  asset: Asset
  createdAt: Scalars['String']['output']
  price: Scalars['Float']['output']
  quantity: Scalars['Int']['output']
  type: OperationType
}

export type OperationInput = {
  assetId: Scalars['ID']['input']
  price: Scalars['Float']['input']
  quantity: Scalars['Int']['input']
  type: OperationType
}

export enum OperationType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type Portfolio = {
  __typename?: 'Portfolio'
  assets: Array<PortfolioAsset>
  portfolioId: Scalars['ID']['output']
}

export type PortfolioAsset = {
  __typename?: 'PortfolioAsset'
  averagePrice: Scalars['Float']['output']
  className: Scalars['String']['output']
  cumulativeTotal: Scalars['Float']['output']
  currentPrice?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  numberOfShares: Scalars['Int']['output']
  symbol: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  getPortfolioInvestedAmount: GetPortfolioInvestedAmountResponse
  getPortfolioVariation: GetPortfolioVariationResponse
  getUserPortfolio: GetUserPortfolioResponse
  listAssets?: Maybe<ListAssetsResponse>
  listAssetsClasses?: Maybe<ListAssetsClassesResponse>
}

export type QueryGetPortfolioInvestedAmountArgs = {
  getPortfolioInvestedAmountRequest?: InputMaybe<GetPortfolioInvestedAmountRequest>
}

export type QueryGetPortfolioVariationArgs = {
  getPortfolioVariationRequest?: InputMaybe<GetPortfolioVariationRequest>
}

export type QueryGetUserPortfolioArgs = {
  getUserPortfolioRequest?: InputMaybe<GetUserPortfolioRequest>
}

export type QueryListAssetsArgs = {
  listAssetsRequest?: InputMaybe<ListAssetsRequest>
}

export type QueryListAssetsClassesArgs = {
  listAssetsClassesRequest: ListAssetsClassesRequest
}

export type RegisterOperationInput = {
  operation: OperationInput
  portfolioId: Scalars['ID']['input']
}

export type SignUpRequest = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type SignUpResponse = {
  __typename?: 'SignUpResponse'
  token: Scalars['String']['output']
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'LoginResponse'; token: string }
}

export type RegisterOperationMutationVariables = Exact<{
  operation: OperationInput
  portfolioId: Scalars['ID']['input']
}>

export type RegisterOperationMutation = { __typename?: 'Mutation'; registerOperation: boolean }

export type SignUpMutationVariables = Exact<{
  signUpRequest: SignUpRequest
}>

export type SignUpMutation = {
  __typename?: 'Mutation'
  signUp: { __typename?: 'SignUpResponse'; token: string }
}

export type GetUserPortfolioQueryVariables = Exact<{
  getUserPortfolioRequest: GetUserPortfolioRequest
}>

export type GetUserPortfolioQuery = {
  __typename?: 'Query'
  getUserPortfolio: {
    __typename?: 'GetUserPortfolioResponse'
    portfolio: {
      __typename?: 'Portfolio'
      portfolioId: string
      assets: Array<{
        __typename?: 'PortfolioAsset'
        symbol: string
        numberOfShares: number
        cumulativeTotal: number
        averagePrice: number
        className: string
        currentPrice?: number | null
      }>
    }
  }
}

export type ListAssetsQueryVariables = Exact<{ [key: string]: never }>

export type ListAssetsQuery = {
  __typename?: 'Query'
  listAssets?: {
    __typename?: 'ListAssetsResponse'
    assets: Array<{ __typename?: 'Asset'; symbol: string; id: string } | null>
  } | null
}

export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginRequest' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegisterOperationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterOperation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'operation' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OperationInput' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'portfolioId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerOperation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerOperationInput' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'operation' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'operation' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'portfolioId' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'portfolioId' } }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<RegisterOperationMutation, RegisterOperationMutationVariables>
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'signUpRequest' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SignUpRequest' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'signUpRequest' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'signUpRequest' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>
export const GetUserPortfolioDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserPortfolio' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'getUserPortfolioRequest' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'GetUserPortfolioRequest' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUserPortfolio' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'getUserPortfolioRequest' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getUserPortfolioRequest' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'portfolio' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assets' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'numberOfShares' }
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'cumulativeTotal' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'averagePrice' }
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'className' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currentPrice' }
                            }
                          ]
                        }
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'portfolioId' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
export const ListAssetsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListAssets' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'listAssetsRequest' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'query' },
                      value: { kind: 'StringValue', value: '', block: false }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'assets' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'id' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<ListAssetsQuery, ListAssetsQueryVariables>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Asset = {
  __typename?: 'Asset'
  class: AssetClass
  id: Scalars['ID']['output']
  symbol: Scalars['String']['output']
}

export type AssetClass = {
  __typename?: 'AssetClass'
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type CreateAssetClassInput = {
  name: Scalars['String']['input']
}

export type CreateAssetInput = {
  assetClassId: Scalars['ID']['input']
  symbol: Scalars['String']['input']
}

export type GetPortfolioInvestedAmountRequest = {
  portfolioId: Scalars['ID']['input']
}

export type GetPortfolioInvestedAmountResponse = {
  __typename?: 'GetPortfolioInvestedAmountResponse'
  totalInvestedAmount: Scalars['Float']['output']
}

export type GetPortfolioVariationRequest = {
  portfolioId: Scalars['ID']['input']
}

export type GetPortfolioVariationResponse = {
  __typename?: 'GetPortfolioVariationResponse'
  percentageVariation: Scalars['Float']['output']
  valueVariation: Scalars['Float']['output']
}

export type GetUserPortfolioRequest = {
  userId: Scalars['ID']['input']
}

export type GetUserPortfolioResponse = {
  __typename?: 'GetUserPortfolioResponse'
  portfolio: Portfolio
}

export type ListAssetsClassesRequest = {
  query: Scalars['String']['input']
}

export type ListAssetsClassesResponse = {
  __typename?: 'ListAssetsClassesResponse'
  assetClasses: Array<Maybe<AssetClass>>
}

export type ListAssetsRequest = {
  query: Scalars['String']['input']
}

export type ListAssetsResponse = {
  __typename?: 'ListAssetsResponse'
  assets: Array<Maybe<Asset>>
}

export type LoginRequest = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  token: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAsset: Scalars['Boolean']['output']
  createAssetClass: Scalars['Boolean']['output']
  createPortfolio: Scalars['Boolean']['output']
  login: LoginResponse
  registerOperation: Scalars['Boolean']['output']
  signUp: SignUpResponse
}

export type MutationCreateAssetArgs = {
  createAssetInput?: InputMaybe<CreateAssetInput>
}

export type MutationCreateAssetClassArgs = {
  createAssetClassInput?: InputMaybe<CreateAssetClassInput>
}

export type MutationLoginArgs = {
  loginRequest: LoginRequest
}

export type MutationRegisterOperationArgs = {
  registerOperationInput?: InputMaybe<RegisterOperationInput>
}

export type MutationSignUpArgs = {
  signUpRequest: SignUpRequest
}

export type Operation = {
  __typename?: 'Operation'
  asset: Asset
  createdAt: Scalars['String']['output']
  price: Scalars['Float']['output']
  quantity: Scalars['Int']['output']
  type: OperationType
}

export type OperationInput = {
  assetId: Scalars['ID']['input']
  price: Scalars['Float']['input']
  quantity: Scalars['Int']['input']
  type: OperationType
}

export enum OperationType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type Portfolio = {
  __typename?: 'Portfolio'
  assets: Array<PortfolioAsset>
  portfolioId: Scalars['ID']['output']
}

export type PortfolioAsset = {
  __typename?: 'PortfolioAsset'
  averagePrice: Scalars['Float']['output']
  className: Scalars['String']['output']
  cumulativeTotal: Scalars['Float']['output']
  currentPrice?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  numberOfShares: Scalars['Int']['output']
  symbol: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  getPortfolioInvestedAmount: GetPortfolioInvestedAmountResponse
  getPortfolioVariation: GetPortfolioVariationResponse
  getUserPortfolio: GetUserPortfolioResponse
  listAssets?: Maybe<ListAssetsResponse>
  listAssetsClasses?: Maybe<ListAssetsClassesResponse>
}

export type QueryGetPortfolioInvestedAmountArgs = {
  getPortfolioInvestedAmountRequest?: InputMaybe<GetPortfolioInvestedAmountRequest>
}

export type QueryGetPortfolioVariationArgs = {
  getPortfolioVariationRequest?: InputMaybe<GetPortfolioVariationRequest>
}

export type QueryGetUserPortfolioArgs = {
  getUserPortfolioRequest?: InputMaybe<GetUserPortfolioRequest>
}

export type QueryListAssetsArgs = {
  listAssetsRequest?: InputMaybe<ListAssetsRequest>
}

export type QueryListAssetsClassesArgs = {
  listAssetsClassesRequest: ListAssetsClassesRequest
}

export type RegisterOperationInput = {
  operation: OperationInput
  portfolioId: Scalars['ID']['input']
}

export type SignUpRequest = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type SignUpResponse = {
  __typename?: 'SignUpResponse'
  token: Scalars['String']['output']
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'LoginResponse'; token: string }
}

export type RegisterOperationMutationVariables = Exact<{
  operation: OperationInput
  portfolioId: Scalars['ID']['input']
}>

export type RegisterOperationMutation = { __typename?: 'Mutation'; registerOperation: boolean }

export type SignUpMutationVariables = Exact<{
  signUpRequest: SignUpRequest
}>

export type SignUpMutation = {
  __typename?: 'Mutation'
  signUp: { __typename?: 'SignUpResponse'; token: string }
}

export type GetUserPortfolioQueryVariables = Exact<{
  getUserPortfolioRequest: GetUserPortfolioRequest
}>

export type GetUserPortfolioQuery = {
  __typename?: 'Query'
  getUserPortfolio: {
    __typename?: 'GetUserPortfolioResponse'
    portfolio: {
      __typename?: 'Portfolio'
      portfolioId: string
      assets: Array<{
        __typename?: 'PortfolioAsset'
        symbol: string
        numberOfShares: number
        cumulativeTotal: number
        averagePrice: number
        className: string
        currentPrice?: number | null
      }>
    }
  }
}

export type ListAssetsQueryVariables = Exact<{ [key: string]: never }>

export type ListAssetsQuery = {
  __typename?: 'Query'
  listAssets?: {
    __typename?: 'ListAssetsResponse'
    assets: Array<{ __typename?: 'Asset'; symbol: string; id: string } | null>
  } | null
}

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginRequest: { email: $email, password: $password }) {
      token
    }
  }
`

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  options:
    | VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>
      > = {}
) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}

export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  LoginMutation,
  LoginMutationVariables
>
export const RegisterOperationDocument = gql`
  mutation RegisterOperation($operation: OperationInput!, $portfolioId: ID!) {
    registerOperation(registerOperationInput: { operation: $operation, portfolioId: $portfolioId })
  }
`

/**
 * __useRegisterOperationMutation__
 *
 * To run a mutation, you first call `useRegisterOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRegisterOperationMutation({
 *   variables: {
 *     operation: // value for 'operation'
 *     portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useRegisterOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        RegisterOperationMutation,
        RegisterOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          RegisterOperationMutation,
          RegisterOperationMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    RegisterOperationMutation,
    RegisterOperationMutationVariables
  >(RegisterOperationDocument, options)
}

export type RegisterOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    RegisterOperationMutation,
    RegisterOperationMutationVariables
  >
export const SignUpDocument = gql`
  mutation SignUp($signUpRequest: SignUpRequest!) {
    signUp(signUpRequest: $signUpRequest) {
      token
    }
  }
`

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignUpMutation({
 *   variables: {
 *     signUpRequest: // value for 'signUpRequest'
 *   },
 * });
 */
export function useSignUpMutation(
  options:
    | VueApolloComposable.UseMutationOptions<SignUpMutation, SignUpMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<SignUpMutation, SignUpMutationVariables>
      > = {}
) {
  return VueApolloComposable.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  )
}

export type SignUpMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SignUpMutation,
  SignUpMutationVariables
>
export const GetUserPortfolioDocument = gql`
  query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {
    getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {
      portfolio {
        assets {
          symbol
          numberOfShares
          cumulativeTotal
          averagePrice
          className
          currentPrice
        }
        portfolioId
      }
    }
  }
`

/**
 * __useGetUserPortfolioQuery__
 *
 * To run a query within a Vue component, call `useGetUserPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPortfolioQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetUserPortfolioQuery({
 *   getUserPortfolioRequest: // value for 'getUserPortfolioRequest'
 * });
 */
export function useGetUserPortfolioQuery(
  variables:
    | GetUserPortfolioQueryVariables
    | VueCompositionApi.Ref<GetUserPortfolioQueryVariables>
    | ReactiveFunction<GetUserPortfolioQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>(
    GetUserPortfolioDocument,
    variables,
    options
  )
}

export function useGetUserPortfolioLazyQuery(
  variables?:
    | GetUserPortfolioQueryVariables
    | VueCompositionApi.Ref<GetUserPortfolioQueryVariables>
    | ReactiveFunction<GetUserPortfolioQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>(
    GetUserPortfolioDocument,
    variables,
    options
  )
}

export type GetUserPortfolioQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetUserPortfolioQuery,
  GetUserPortfolioQueryVariables
>
export const ListAssetsDocument = gql`
  query ListAssets {
    listAssets(listAssetsRequest: { query: "" }) {
      assets {
        symbol
        id
      }
    }
  }
`

/**
 * __useListAssetsQuery__
 *
 * To run a query within a Vue component, call `useListAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAssetsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAssetsQuery();
 */
export function useListAssetsQuery(
  options:
    | VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<ListAssetsQuery, ListAssetsQueryVariables>(
    ListAssetsDocument,
    {},
    options
  )
}

export function useListAssetsLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<ListAssetsQuery, ListAssetsQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<ListAssetsQuery, ListAssetsQueryVariables>(
    ListAssetsDocument,
    {},
    options
  )
}

export type ListAssetsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  ListAssetsQuery,
  ListAssetsQueryVariables
>
