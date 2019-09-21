import { put, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import * as Actions from './actions';
import { API_URL } from '../../constants';

function* login(action) {
  const email = action.payload;

  try {
    const response = yield fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    console.log('response', response);

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = response.json();

    yield put(Actions.loginSuccess(data));
  } catch (error) {
    console.log('error',error);

    yield put(Actions.loginError(error));
  }
};

export default function*() {
  yield takeLatest(Types.LOGIN, login);
}