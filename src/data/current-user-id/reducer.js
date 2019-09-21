import { handleActions } from 'redux-actions';
import * as Types from './types';

const initialState = {
  data: null,
  isLoading: false,
};

const loginReducer = state => ({
  ...state,
  isLoading: true,
});

const loginSuccessReducer = (state, action) => ({
  data: action.payload,
  isLoading: false,
});

export default handleActions({
  [Types.LOGIN]: loginReducer,
  [Types.LOGIN_SUCCESS]: loginSuccessReducer,
}, initialState);



