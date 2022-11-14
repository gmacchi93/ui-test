import { actionTypes, FetchPersonalitiesSuccess, ListPersonalitiesItems } from "types";

// FETCH_PERSONALITIES
export const fetchPersonalities = (filters?:any) => ({
  type: actionTypes.FETCH_PERSONALITIES,
  filters
});

export const fetchPersonalitiesRequest = () => ({
  type: actionTypes.FETCH_PERSONALITIES_REQUEST,
});

export const fetchPersonalitiesSuccess = (data:ListPersonalitiesItems):FetchPersonalitiesSuccess => ({
  type: actionTypes.FETCH_PERSONALITIES_SUCCESS,
  data
});

export const fetchPersonalitiesError = (error: Error) => ({
  type: actionTypes.FETCH_PERSONALITIES_ERROR,
  error
});
