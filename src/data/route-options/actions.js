// ROUTE OPTIONS

// IMPORTS
import { createAction } from 'redux-actions';
import * as Types from './types';

// EXPORT ROUTE ACTIONS
export const getRoute = createAction(Types.GET_ROUTE);
export const getRouteSuccess = createAction(Types.GET_ROUTE_SUCCESS);
export const getRouteError = createAction(Types.GET_ROUTE_ERROR);

// // EXPORT LOGIN ACTIONS
// export const login = createAction(Types.LOGIN);
// export const loginSuccess = createAction(Types.LOGIN_SUCCESS);
// export const loginError = createAction(Types.LOGIN_ERROR);