import { combineReducers } from 'redux';
import eventReducer from '../../components/events/eventReducer';
import testReducer from '../../components/sandbox/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;
