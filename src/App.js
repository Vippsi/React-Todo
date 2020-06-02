import React, {useEffect} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import formSchema from './validation/formSchema'
import * as yup from 'yup'
import './styles.css'


const todos = [
 
  
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
      id: new Date(),
      completed: false
    }
    localStorage.setItem('localTodo', JSON.stringify(newTodo))
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
      todos: []
    })
  }

    

  

  
  render() {
    return (
      <div className='big-div'>
        <div className='app'>
        <h2>The List</h2>
        {/* {console.log(todos.task.length())} */}
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}
        clearTodos={this.clearTodos}
        // newTodo={newTodo}
        
        />
      </div>
    );
  }
}

export default App;
