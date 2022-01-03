import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { Todo } from './actions';
import { todoReducer } from './reducers';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({ todos: todoReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
