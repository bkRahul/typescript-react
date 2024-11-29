import { Button } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import { Auth } from './components/Auth/Auth';
import { Button as CustomButton } from './components/Button/Button';
import { Counter } from './components/Counter';
import { Heroes } from './components/Heroes';
import { Text } from './components/polymorphic/Text';
import { Timer } from './components/Timer';
import { UserContextProvider } from './context/UserContext';

import { StoreState } from './store';
import { Todo, fetchTodos, deleteTodo } from './store/actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: () => {};
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (prevProps.todos !== this.props.todos) {
      this.setState({ fetching: false });
    }
  }

  onFetchClick(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <p onClick={() => this.props.deleteTodo(todo.id)} key={todo.id}>
        {todo.title}
      </p>
    ));
  }

  render() {
    return (
      <UserContextProvider>
        <Button component={Link} to='/mui' variant='contained'>
          Go To Mui
        </Button>

        <Auth />
        <Timer />
        <Heroes />
        <Counter />
        {this.state.fetching ? (
          <Text as='label' htmlFor='some' color='primary'>
            Loading
          </Text>
        ) : (
          <>
            {this.renderList()}
            <CustomButton
              btnType='fetch'
              onClick={this.onFetchClick.bind(this)}
              btnName='Fetch'
            />
          </>
        )}
      </UserContextProvider>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
