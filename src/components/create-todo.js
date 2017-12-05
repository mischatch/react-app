import React from 'react';

export default class TodosList extends React.Component {

  render() { 
    return (
      <form onSubmit={this.handleCreate}>
        <input type='text' placeholder='what do i need to do?' ref="createInput" />
        <button>Create</button>
      </form>
    );
  }
  
  handleCreate(event){
    event.preventDefault()
    debugger
    this.props.createTask(this.refs.createInput.value);
  }
}