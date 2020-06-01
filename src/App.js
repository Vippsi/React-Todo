import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './styles.css'


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      todos: todos,
    }
  }

  addTodo = itemTask => {
    const newTodo = {
      task: itemTask,
      id: new Date().now,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed:!todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearTodos = e => {
    this.setState({
      todos: [{}]
    })
  }

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}
        clearTodos={this.clearTodos}
        
        />
      </div>
    );
  }
}

export default App;
