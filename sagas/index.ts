import { all, fork } from 'redux-saga/effects';
import PersonalitiesSaga from './PersonalitiesSaga';


export default function* rootSaga() {
  yield all([
    fork(PersonalitiesSaga),
  ]);
}
