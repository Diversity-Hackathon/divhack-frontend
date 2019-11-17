import { put, takeLatest, delay } from 'redux-saga/effects';
import * as Types from './types';
import * as Actions from './actions';
import history from '../../history';
import { API_URL } from '../../constants';

function* login(action) {
  // GRAB PAYLOAD FROM ACTION 
  const email = action.payload;

  // TRY REQUEST 
  try {
    // const response = yield fetch(`${API_URL}/login`, {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });

    // console.log('response', response);

    // if (!response.ok) {
    //   throw new Error('Error');
    // }

    // const data = response.json();
    yield delay(300);
    yield put(Actions.loginSuccess(1));
    history.push('/start');
  } catch (error) {
    yield put(Actions.loginError(error));
  }
};

export default function*() {
  yield takeLatest(Types.LOGIN, login);
}