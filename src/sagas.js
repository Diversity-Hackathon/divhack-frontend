import { all, fork } from 'redux-saga/effects';

import currentUserIdSaga from './data/current-user-id/saga';
// import routeOptionsSaga from './data/route-options/saga';

export default function* () {
  yield all([
    fork(currentUserIdSaga),
    // fork(routeOptionsSaga),
  ]);
};
