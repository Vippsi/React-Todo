import React, {useEffect} from 'react'
import { string } from 'yup'

class TodoForm extends React.Component{
    constructor() {
        super()
        this.state= {
            task:'',
            disabled:true
        }
    }

    handleInputChanges = e => {
        
            this.setState({
                task: e.target.value
            })
            if(this.task <= 0){
                this.setState({
                    disabled:true
                })
        }else{
            this.setState({
                disabled:false
            })
        }
        
    }
    handleLocal = e => {
        localStorage.getItem('localTodo')
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState({
            task:'',
            disabled:true
        })
    }

    // isDisabled = e => {
    //     if(string.IsNullOrWhiteSpace(this.state.task.Text)) {
    //         this.setState({
    //           disabled:true
    //         })
    //       } else{
    //         this.setState({
    //             disabled:false
    //         })
    //       }
    // }
            
    
    
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
                <h2>{console.log(this.state.task.length)}</h2>
                <button disabled={this.state.disabled} className='todo-button'>Add item</button>
            </form>
        )
    }
}
export default TodoForm
