import { all, select, takeLatest, delay, put } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
/* new-constant-import-goes-here */
} from './constants';
import {
  toggleLoginBooleanableState
  /* new-action-import-goes-here */
} from './actions';
import { selectLoginBooleanableState } from './selectors';

export function* intializeSaga() {
  const booleanable = yield select(selectLoginBooleanableState('__booleanable__'));

  yield put(toggleLoginBooleanableState({ __booleanable__: !booleanable }));

  console.log('loginSaga has been initialized properly __booleanable__:', booleanable );
}

/* new-saga-goes-here */

export default function* loginSaga() {
  yield all([
    takeLatest(DEFAULT_ACTION, intializeSaga),
    /* new-saga-registration-goes-here */
  ]);
}
