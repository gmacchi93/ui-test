/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePersonalitiesInput = {
  name: string,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
  votes?: string | null,
};

export type Personalities = {
  __typename: "Personalities",
  id: string,
  name: string,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
  votes?: string | null,
};

export type UpdatePersonalitiesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
  votes?: string | null,
};

export type DeletePersonalitiesInput = {
  id: string,
};

export type TablePersonalitiesFilterInput = {
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  picture?: TableStringFilterInput | null,
  lastUpdated?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type PersonalitiesConnection = {
  __typename: "PersonalitiesConnection",
  items?:  Array<Personalities | null > | null,
  nextToken?: string | null,
};

export type CreatePersonalitiesMutationVariables = {
  input: CreatePersonalitiesInput,
};

export type CreatePersonalitiesMutation = {
  createPersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type UpdatePersonalitiesMutationVariables = {
  input: UpdatePersonalitiesInput,
};

export type UpdatePersonalitiesMutation = {
  updatePersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type DeletePersonalitiesMutationVariables = {
  input: DeletePersonalitiesInput,
};

export type DeletePersonalitiesMutation = {
  deletePersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type GetPersonalitiesQueryVariables = {
  id: string,
};

export type GetPersonalitiesQuery = {
  getPersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type ListPersonalitiesQueryVariables = {
  filter?: TablePersonalitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalitiesQuery = {
  listPersonalities?:  {
    __typename: "PersonalitiesConnection",
    items?:  Array< {
      __typename: "Personalities",
      id: string,
      name: string,
      description?: string | null,
      picture?: string | null,
      lastUpdated?: string | null,
      votes?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePersonalitiesSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
};

export type OnCreatePersonalitiesSubscription = {
  onCreatePersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type OnUpdatePersonalitiesSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
};

export type OnUpdatePersonalitiesSubscription = {
  onUpdatePersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};

export type OnDeletePersonalitiesSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  lastUpdated?: string | null,
};

export type OnDeletePersonalitiesSubscription = {
  onDeletePersonalities?:  {
    __typename: "Personalities",
    id: string,
    name: string,
    description?: string | null,
    picture?: string | null,
    lastUpdated?: string | null,
    votes?: string | null,
  } | null,
};
