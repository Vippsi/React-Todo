import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super()
        this.state= {
            task:''
        }
    }

    handleInputChanges = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState({
            task:''
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='task'
                placeholder='Add an item'
                value={this.state.task}
                onChange={this.handleInputChanges}
                />
                <button className='todo-button'>Add item</button>
            </form>
        )
    }
}
export default TodoForm
