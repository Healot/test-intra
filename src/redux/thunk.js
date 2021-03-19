import { createStore, applyMiddleware, combineReducers } from 'redux';
import  thunk  from 'redux-thunk';
import { allTasksReducer } from './reducerAllTasks/allTasksReducer';
import {AddTaskState} from './reducerAddTaskStatus/AddTaskState';

const reducer = combineReducers({
    allTasksReducer: allTasksReducer,
    AddTaskState: AddTaskState,
  });

export const store = createStore(reducer, applyMiddleware(thunk));


