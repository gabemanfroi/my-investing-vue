/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Asset = {
  __typename?: 'Asset';
  class: AssetClass;
  id: Scalars['ID']['output'];
  ticker: Scalars['String']['output'];
};

export type AssetClass = {
  __typename?: 'AssetClass';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateAssetClassInput = {
  name: Scalars['String']['input'];
};

export type CreateAssetInput = {
  assetClassId: Scalars['ID']['input'];
  ticker: Scalars['String']['input'];
};

export type GetUserPortfolioRequest = {
  userId: Scalars['Int']['input'];
};

export type GetUserPortfolioResponse = {
  __typename?: 'GetUserPortfolioResponse';
  portfolio: Portfolio;
};

export type ListAssetsClassesRequest = {
  query: Scalars['String']['input'];
};

export type ListAssetsClassesResponse = {
  __typename?: 'ListAssetsClassesResponse';
  assetClasses: Array<Maybe<AssetClass>>;
};

export type ListAssetsRequest = {
  query: Scalars['String']['input'];
};

export type ListAssetsResponse = {
  __typename?: 'ListAssetsResponse';
  assets: Array<Maybe<Asset>>;
};

export type LoginRequest = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAsset: Scalars['Boolean']['output'];
  createAssetClass: Scalars['Boolean']['output'];
  createPortfolio: Portfolio;
  login: LoginResponse;
  register: RegisterResponse;
  registerOperation: Scalars['Boolean']['output'];
};


export type MutationCreateAssetArgs = {
  createAssetInput?: InputMaybe<CreateAssetInput>;
};


export type MutationCreateAssetClassArgs = {
  createAssetClassInput?: InputMaybe<CreateAssetClassInput>;
};


export type MutationLoginArgs = {
  loginRequest: LoginRequest;
};


export type MutationRegisterArgs = {
  registerRequest: RegisterRequest;
};


export type MutationRegisterOperationArgs = {
  registerOperationInput?: InputMaybe<RegisterOperationInput>;
};

export type Operation = {
  __typename?: 'Operation';
  asset: Asset;
  createdAt: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  type: OperationType;
};

export type OperationInput = {
  assetId: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  type: OperationType;
};

export enum OperationType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type Portfolio = {
  __typename?: 'Portfolio';
  assets: Array<PortfolioAsset>;
};

export type PortfolioAsset = {
  __typename?: 'PortfolioAsset';
  averagePrice: Scalars['Float']['output'];
  className: Scalars['String']['output'];
  cumulativeTotal: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  ticker: Scalars['String']['output'];
  totalAmount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getUserPortfolio: GetUserPortfolioResponse;
  listAssets?: Maybe<ListAssetsResponse>;
  listAssetsClasses?: Maybe<ListAssetsClassesResponse>;
};


export type QueryGetUserPortfolioArgs = {
  getUserPortfolioRequest?: InputMaybe<GetUserPortfolioRequest>;
};


export type QueryListAssetsArgs = {
  listAssetsRequest?: InputMaybe<ListAssetsRequest>;
};


export type QueryListAssetsClassesArgs = {
  listAssetsClassesRequest: ListAssetsClassesRequest;
};

export type RegisterOperationInput = {
  operation: OperationInput;
  portfolioId: Scalars['ID']['input'];
};

export type RegisterRequest = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  token: Scalars['String']['output'];
};

export type GetUserPortfolioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPortfolioQuery = { __typename?: 'Query', getUserPortfolio: { __typename?: 'GetUserPortfolioResponse', portfolio: { __typename?: 'Portfolio', assets: Array<{ __typename?: 'PortfolioAsset', id: string, ticker: string, className: string, totalAmount: number, averagePrice: number, cumulativeTotal: number }> } } };


export const GetUserPortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPortfolio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserPortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getUserPortfolioRequest"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"IntValue","value":"8"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"portfolio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"averagePrice"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeTotal"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserPortfolioQuery, GetUserPortfolioQueryVariables>;