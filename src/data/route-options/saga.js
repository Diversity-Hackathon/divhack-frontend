// ROUTE OPTIONS

// IMPORTS
import { put, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import * as Actions from './actions';
import { API_URL } from '../../constants';

function* getRoute(action) {
  // GRAB PAYLOAD FROM ACTION 
  const destination = action.payload;

  // TRY REQUEST 
  try {
    // POST EMAIL REQUEST TO SERVER
    const response = yield fetch(`${API_URL}/route`, {
      method: 'POST',
      body: JSON.stringify({ destination }),
    });

    console.log('response', response);

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = response.json();

    // PUSH THRU DATA IF SUCCESSFUL TO ROUTESUCESS
    yield put(Actions.getRouteSuccess(data));
  } 
  catch (error) {
    console.log('error',error);

    yield put(Actions.getRouteError(error));
  }
};

export default function*() {
  yield takeLatest(Types.GET_ROUTE, getRoute);
}