import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCHTODOS;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const resp = await axios.get<Todo[]>(`${url}`);
    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCHTODOS,
      payload: resp.data,
    });
  };
};
