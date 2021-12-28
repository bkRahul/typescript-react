import { combineReducers } from 'redux';
import { FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export interface StoreState {
  todos: Todo[];
}

const todoReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.FETCHTODOS:
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers<StoreState>({ todos: todoReducer });
