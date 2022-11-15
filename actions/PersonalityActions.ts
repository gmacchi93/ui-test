import {
  actionTypes,
  FetchPersonalitiesSuccess,
  ListPersonalitiesItems,
  VoteSuccess,
  Personality,
  GetPersonalitiesItems,
  Direction,
  Votes,
} from "types";

// FETCH_PERSONALITIES
export const fetchPersonalities = (filters?: any) => ({
  type: actionTypes.FETCH_PERSONALITIES,
  filters,
});

export const fetchPersonalitiesRequest = () => ({
  type: actionTypes.FETCH_PERSONALITIES_REQUEST,
});

export const fetchPersonalitiesSuccess = (
  data: ListPersonalitiesItems
): FetchPersonalitiesSuccess => ({
  type: actionTypes.FETCH_PERSONALITIES_SUCCESS,
  data,
});

export const fetchPersonalitiesError = (error: Error) => ({
  type: actionTypes.FETCH_PERSONALITIES_ERROR,
  error,
});

// VOTE
export const vote = (id: string, votes: Votes) => ({
  type: `${actionTypes.VOTE}_${id}`,
  votes,
  id,
});

export const voteRequest = (id: string) => ({
  type: `${actionTypes.VOTE_REQUEST}_${id}`,
});

export const voteSuccess = (data: Personality, id: string): VoteSuccess => ({
  type: `${actionTypes.VOTE_SUCCESS}_${id}`,
  data,
});

export const voteError = (error: Error, id: string) => ({
  type: `${actionTypes.VOTE_ERROR}_${id}`,
  error,
});

//reset vote
export const resetVote = (id: string) => ({
  type: `${actionTypes.VOTE}_RESET_${id}`,
});
