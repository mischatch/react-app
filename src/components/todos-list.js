import React from 'react';
import _ from 'lodash';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
  }
  
  render() { 
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
          <tbody>
            {this.renderItems()}
          </tbody>
        </thead>
      </table>
    );
  }
}