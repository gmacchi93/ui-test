import { TablePersonalitiesFilterInput } from "@/src/API";
import { Personality } from "./models";

export interface PersonalityState {
  items: Personality[];
  nextToken?: string;
}

export interface PersonalitiesState {
  personalities: PersonalityState;
}

export interface ListPersonalitiesItems {
  listPersonalities: {
    items: Personality[]
    nextToken: string,
  },
}

export interface FetchPersonalitiesVariables {
  limit?: number,
  filter?: TablePersonalitiesFilterInput,
  nextToken?: string,
};

export interface GetPersonalityVariables {
  id: string,
};

export interface ListPersonalitiesGraphQL {
  data: ListPersonalitiesItems;
}