import { TablePersonalitiesFilterInput } from "@/src/API";
import { Personality } from "./models";
import { statusTypes } from "./status";

export interface PersonalityState {
  items: Personality[];
  nextToken?: string;
}

export interface PersonalitiesState {
  personalities: PersonalityState;
}


export interface StatusState {
  [key: string]: statusTypes 
}

export interface AppState {
  personalities: PersonalitiesState;
  status: StatusState;
}

export interface ListPersonalitiesItems {
  listPersonalities: {
    items: Personality[]
    nextToken: string,
  },
}

export interface UpdatePersonalitiesGraphQL {
  data: UpdatePersonalitiesItems,
}

export interface UpdatePersonalitiesItems {
  updatePersonalities: Personality,
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

// ----
export interface GetPersonalitiesItems {
  getPersonalities: Personality,
}

export interface GetPersonalitiesGraphQL {
  data: GetPersonalitiesItems;
}

export interface GetPersonalitiesVariables {
  jobId: string,
};