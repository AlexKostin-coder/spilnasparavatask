import * as Users from '../core/users/users.reducer';

import { combineReducers } from 'redux'

const rootReducet = combineReducers({
  ...Users,
});

export default rootReducet;