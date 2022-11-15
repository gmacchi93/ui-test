import { GetPersonalitiesItems, ListPersonalitiesItems } from "./data";
import { Personality, Votes } from "./models";

export enum actionTypes {
  FETCH_PERSONALITIES = "FETCH_PERSONALITIES",
  FETCH_PERSONALITIES_REQUEST = "FETCH_PERSONALITIES_REQUEST",
  FETCH_PERSONALITIES_SUCCESS = "FETCH_PERSONALITIES_SUCCESS",
  FETCH_PERSONALITIES_ERROR = "FETCH_PERSONALITIES_ERROR",

  VOTE = "VOTE",
  VOTE_REQUEST = "VOTE_REQUEST",
  VOTE_SUCCESS = "VOTE_SUCCESS",
  VOTE_ERROR = "VOTE_ERROR",
}

export interface FetchPersonalities {
    type: actionTypes.FETCH_PERSONALITIES,
    filters?: any,
}

export interface FetchPersonalitiesRequest {
    type: actionTypes.FETCH_PERSONALITIES_REQUEST,
}

export interface FetchPersonalitiesSuccess {
    type: actionTypes.FETCH_PERSONALITIES_SUCCESS,
    data: ListPersonalitiesItems,
}

export interface FetchPersonalitiesError {
    type: actionTypes.FETCH_PERSONALITIES_ERROR,
    error: Error
}

export interface Vote {
    type: actionTypes.VOTE,
    id: string,
    votes: Votes,
}

export interface VoteRequest {
    type: actionTypes.VOTE_REQUEST,
}

export interface VoteSuccess {
    type: string,
    data: Personality,
}

export interface VoteError {
    type: actionTypes.VOTE_ERROR,
    error: Error
}