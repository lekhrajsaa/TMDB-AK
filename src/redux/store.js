import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {Reducers} from './Reducer';

const routeReducer = combineReducers({
  Reducers,
});
export const store = createStore(routeReducer);
