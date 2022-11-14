/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPersonalities = /* GraphQL */ `
  query GetPersonalities($id: String!) {
    getPersonalities(id: $id) {
      id
      name
      description
      picture
      lastUpdated
      votes
    }
  }
`;
export const listPersonalities = /* GraphQL */ `
  query ListPersonalities(
    $filter: TablePersonalitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        picture
        lastUpdated
        votes
      }
      nextToken
    }
  }
`;
