import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
  {
    task: 'make something',
    isCompleted: false
  }, 
  {
    task: 'eat dinner', 
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      todos
    };
  }
  
  
  render() { 
    return (
      <div>
        <h1>React App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList 
            todos={this.state.todos}
            
             />
      </div>
    );
  }
  
  createTask(task){
    this.state.todos.push({
      task,
      isCompleated: false
    })
    this.setState({todos: this.state.todos});
  }
}