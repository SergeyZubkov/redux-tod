import {combineReducers} from 'redux';
import tasks from './tasks';
import filter from './filter';

const todoReducer = combineReducers({
  tasks,
  filter
})


export default todoReducer;
