

import { fetchPersonalitiesError, fetchPersonalitiesRequest, fetchPersonalitiesSuccess, voteError, voteRequest, voteSuccess } from "actions/PersonalityActions";
import PersonalitiesController from "controllers/PersonalitiesController";
import { AnyAction } from "redux";
import { takeLatest, put, call } from "redux-saga/effects";

import {
  actionTypes,
  FetchPersonalities,
  GetPersonalitiesItems,
  ListPersonalitiesItems,
  Personality,
  UpdatePersonalitiesItems,
  Vote,
} from "../types";

const VOTE_UUID_REGEX = /VOTE_[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function* onFetchPersonalities(action: FetchPersonalities) {
  try {
    yield put(fetchPersonalitiesRequest());
    const data: ListPersonalitiesItems = yield call(PersonalitiesController.fetchPersonalities);
    yield put(fetchPersonalitiesSuccess(data));
  } catch (error: any) {
    yield put(fetchPersonalitiesError(error));
  }
}

function* onVote({id, votes}: Vote) {
  try {
    yield put(voteRequest(id));
    const data: UpdatePersonalitiesItems = yield call(PersonalitiesController.vote, id, votes);
    yield put(voteSuccess(data.updatePersonalities, id));
  } catch (error: any) {
    yield put(voteError(error, id));
  }
}

function* PersonalitiesSaga() {
  yield takeLatest(actionTypes.FETCH_PERSONALITIES, onFetchPersonalities);
  yield takeLatest((action:AnyAction) => VOTE_UUID_REGEX.test(action.type), onVote);
}

export default PersonalitiesSaga;
