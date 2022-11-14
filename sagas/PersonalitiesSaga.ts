

import { fetchPersonalitiesError, fetchPersonalitiesRequest, fetchPersonalitiesSuccess } from "actions/PersonalityActions";
import PersonalitiesController from "controllers/PersonalitiesController";
import { takeLatest, put, call } from "redux-saga/effects";

import {
  actionTypes,
  FetchPersonalities,
  ListPersonalitiesItems,
} from "../types";

function* onFetchPersonalities(action: FetchPersonalities) {
  try {
    yield put(fetchPersonalitiesRequest());
    const data: ListPersonalitiesItems = yield call(PersonalitiesController.fetchPersonalities);
    yield put(fetchPersonalitiesSuccess(data));
  } catch (error: any) {
    yield put(fetchPersonalitiesError(error));
  }
}

function* PersonalitiesSaga() {
  yield takeLatest(actionTypes.FETCH_PERSONALITIES, onFetchPersonalities);
}

export default PersonalitiesSaga;
