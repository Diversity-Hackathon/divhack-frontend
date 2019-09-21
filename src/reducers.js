import { combineReducers } from 'redux';

import currentTripReducer from './data/current-trip';
import currentUserIdReducer from './data/current-user-id';
import routeOptionsReducer from './data/route-options';

export default combineReducers({
  currentTrip: currentTripReducer,
  currentUserId: currentUserIdReducer,
  routeOptions: routeOptionsReducer,
});
