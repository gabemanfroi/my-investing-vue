/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n    mutation Login($email: String!, $password: String!) {\n      login(loginRequest: { email: $email, password: $password }) {\n        token\n      }\n    }\n  ':
    types.LoginDocument,
  '\n    mutation RegisterOperation($operation: OperationInput!, $portfolioId: ID!) {\n      registerOperation(\n        registerOperationInput: { operation: $operation, portfolioId: $portfolioId }\n      )\n    }\n  ':
    types.RegisterOperationDocument,
  '\n    mutation SignUp($signUpRequest: SignUpRequest!) {\n      signUp(signUpRequest: $signUpRequest) {\n        token\n      }\n    }\n  ':
    types.SignUpDocument,
  '\n      query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {\n        getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {\n          portfolio {\n            assets {\n              symbol\n              numberOfShares\n              cumulativeTotal\n              averagePrice\n              className\n              currentPrice\n            }\n            portfolioId\n          }\n        }\n      }\n    ':
    types.GetUserPortfolioDocument,
  '\n    query ListAssets {\n      listAssets(listAssetsRequest: { query: "" }) {\n        assets {\n          symbol\n          id\n        }\n      }\n    }\n  ':
    types.ListAssetsDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation Login($email: String!, $password: String!) {\n      login(loginRequest: { email: $email, password: $password }) {\n        token\n      }\n    }\n  '
): (typeof documents)['\n    mutation Login($email: String!, $password: String!) {\n      login(loginRequest: { email: $email, password: $password }) {\n        token\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation RegisterOperation($operation: OperationInput!, $portfolioId: ID!) {\n      registerOperation(\n        registerOperationInput: { operation: $operation, portfolioId: $portfolioId }\n      )\n    }\n  '
): (typeof documents)['\n    mutation RegisterOperation($operation: OperationInput!, $portfolioId: ID!) {\n      registerOperation(\n        registerOperationInput: { operation: $operation, portfolioId: $portfolioId }\n      )\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation SignUp($signUpRequest: SignUpRequest!) {\n      signUp(signUpRequest: $signUpRequest) {\n        token\n      }\n    }\n  '
): (typeof documents)['\n    mutation SignUp($signUpRequest: SignUpRequest!) {\n      signUp(signUpRequest: $signUpRequest) {\n        token\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {\n        getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {\n          portfolio {\n            assets {\n              symbol\n              numberOfShares\n              cumulativeTotal\n              averagePrice\n              className\n              currentPrice\n            }\n            portfolioId\n          }\n        }\n      }\n    '
): (typeof documents)['\n      query GetUserPortfolio($getUserPortfolioRequest: GetUserPortfolioRequest!) {\n        getUserPortfolio(getUserPortfolioRequest: $getUserPortfolioRequest) {\n          portfolio {\n            assets {\n              symbol\n              numberOfShares\n              cumulativeTotal\n              averagePrice\n              className\n              currentPrice\n            }\n            portfolioId\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query ListAssets {\n      listAssets(listAssetsRequest: { query: "" }) {\n        assets {\n          symbol\n          id\n        }\n      }\n    }\n  '
): (typeof documents)['\n    query ListAssets {\n      listAssets(listAssetsRequest: { query: "" }) {\n        assets {\n          symbol\n          id\n        }\n      }\n    }\n  ']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
