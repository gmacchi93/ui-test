/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePersonalities = /* GraphQL */ `
  subscription OnCreatePersonalities(
    $id: String
    $name: String
    $description: String
    $picture: String
    $lastUpdated: String
  ) {
    onCreatePersonalities(
      id: $id
      name: $name
      description: $description
      picture: $picture
      lastUpdated: $lastUpdated
    ) {
      id
      name
      description
      picture
      lastUpdated
      votes
    }
  }
`;
export const onUpdatePersonalities = /* GraphQL */ `
  subscription OnUpdatePersonalities(
    $id: String
    $name: String
    $description: String
    $picture: String
    $lastUpdated: String
  ) {
    onUpdatePersonalities(
      id: $id
      name: $name
      description: $description
      picture: $picture
      lastUpdated: $lastUpdated
    ) {
      id
      name
      description
      picture
      lastUpdated
      votes
    }
  }
`;
export const onDeletePersonalities = /* GraphQL */ `
  subscription OnDeletePersonalities(
    $id: String
    $name: String
    $description: String
    $picture: String
    $lastUpdated: String
  ) {
    onDeletePersonalities(
      id: $id
      name: $name
      description: $description
      picture: $picture
      lastUpdated: $lastUpdated
    ) {
      id
      name
      description
      picture
      lastUpdated
      votes
    }
  }
`;
