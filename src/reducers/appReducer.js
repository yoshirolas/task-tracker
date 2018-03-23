import { combineReducers } from 'redux';
import showTaskList from './showTaskListReducer';


const appReducer = combineReducers ({
  showTaskList,
});

export default appReducer;