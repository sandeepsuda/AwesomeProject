import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  movies: dataReducer,
});

export default rootReducer;
