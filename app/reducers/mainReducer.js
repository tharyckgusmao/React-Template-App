
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './reducers/counter.js';

const rootReducer = combineReducers({
  routing,
  counter
});

export default rootReducer;
