import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import BenchesReducer from './benches_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchesReducer
});

export default RootReducer;
