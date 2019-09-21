import { createAction } from 'redux-actions';
import * as Types from './types';

export const login = createAction(Types.LOGIN);
export const loginSuccess = createAction(Types.LOGIN_SUCCESS);
export const loginError = createAction(Types.LOGIN_ERROR);