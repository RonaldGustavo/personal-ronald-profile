import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const reducers = combineReducers({
  HomeReducer: HomeReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
