import { API, graphqlOperation } from "aws-amplify";
import { listPersonalities } from "@/src/graphql/queries";
import {
  FetchPersonalitiesVariables,
  ListPersonalitiesGraphQL,
  ListPersonalitiesItems,
  UpdatePersonalitiesGraphQL,
  UpdatePersonalitiesItems,
  Votes,
} from "../types";
import { updatePersonalities } from "@/src/graphql/mutations";

class PersonalitiesController {
  fetchPersonalities = async (
    variables?: FetchPersonalitiesVariables,
    operation: string = listPersonalities
  ): Promise<ListPersonalitiesItems> => {
    const result = await (API.graphql(
      graphqlOperation(operation, variables)
    ) as Promise<ListPersonalitiesGraphQL>);
    return result.data;
  };

  vote = async (id: string, votes:Votes): Promise<UpdatePersonalitiesItems> => {
    const result = await (API.graphql(
      graphqlOperation(updatePersonalities, { input: { id: id, votes: JSON.stringify(votes) } })
    ) as Promise<UpdatePersonalitiesGraphQL>);
    return result.data;
  };
}

export default new PersonalitiesController();
