// ROUTE OPTIONS

// IMPORTS
import { handleActions } from 'redux-actions';
import * as Types from './types';

// SETS DATA FOR INITIAL STATE
const initialState = {
  data: null,
  isLoading: false,
};

// HANDLES ACTION, STARTS LOADING
const getRouteReducer = state => ({
  ...state,
  isLoading: true,
});

// UPDATES STATE WITH PAYLOAD FROM ACTION, STOPS LOADING
const getRouteSuccessReducer = (state, action) => ({
  data: action.payload,
  isLoading: false,
});

// ...
const getRouteErrorReducer = (state, action) => ({
});

export default handleActions({
  [Types.GET_ROUTE]: getRouteReducer,
  [Types.GET_ROUTE_SUCCESS]: getRouteSuccessReducer,
  [Types.GET_ROUTE_ERROR]: getRouteErrorReducer,
}, initialState);



