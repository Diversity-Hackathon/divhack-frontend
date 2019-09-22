// CURRENT USER ID 

// IMPORTS
import { handleActions } from 'redux-actions';
import * as Types from './types';

// SETS DATA FOR INITIAL STATE
const initialState = {
  data: null,
  isLoading: false,
};

// HANDLES ACTION, STARTS LOADING
const loginReducer = state => ({
  ...state,
  isLoading: true,
});

// UPDATES STATE WITH PAYLOAD FROM ACTION, STOPS LOADING
const loginSuccessReducer = (state, action) => ({
  data: action.payload,
  isLoading: false,
});

export default handleActions({
  [Types.LOGIN]: loginReducer,
  [Types.LOGIN_SUCCESS]: loginSuccessReducer,
}, initialState);



