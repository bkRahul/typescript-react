import { useReducer } from 'react';
import { Button } from './Button/Button';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'inc' | 'dec';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;

const intialState: CounterState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + action.payload };

    case 'dec':
      return { count: state.count - action.payload };

    case 'reset':
      return intialState;

    default:
      return intialState;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <Button
        btnType='counter'
        onClick={() => dispatch({ type: 'inc', payload: 1 })}
        btnName='Increment'
      />
      <span>{state.count}</span>
      <Button
        btnType='counter'
        onClick={() => dispatch({ type: 'dec', payload: 1 })}
        btnName='Decrement'
      />
      <div>
        <Button
          btnType='counter'
          onClick={() => dispatch({ type: 'reset' })}
          btnName='Reset'
        />
      </div>
    </>
  );
};
