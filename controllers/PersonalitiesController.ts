import { API, graphqlOperation } from "aws-amplify";
import { listPersonalities } from "@/src/graphql/queries";
import { FetchPersonalitiesVariables, ListPersonalitiesGraphQL, ListPersonalitiesItems } from "../types";


class PersonalitiesController {
  fetchPersonalities = async (variables?: FetchPersonalitiesVariables, operation:string = listPersonalities): Promise<ListPersonalitiesItems> => {
    const result = await (API.graphql(
      graphqlOperation(operation, variables)
    ) as Promise<ListPersonalitiesGraphQL>);
    return result.data;
  };
}

export default new PersonalitiesController();
