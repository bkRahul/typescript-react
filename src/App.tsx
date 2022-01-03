import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
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

  onFetchClick() {
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
    return this.state.fetching ? (
      <>Loading</>
    ) : (
      <>
        <button onClick={this.onFetchClick.bind(this)}>Fetch</button>
        {this.renderList()}
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
