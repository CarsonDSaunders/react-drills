import React from 'react';
import './App.css';
import List from './List.js';
import NewTask from './NewTask.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      taskList: [],
    }

    this.handleClick = this.handleClick.bind( this )
  }

  handleClick(val) {
    this.setState({taskList: [...this.state.taskList, val]});
  }

  render() {
    return (
      <div>
        <h1>The To-Do List 2.0</h1>
        <NewTask add={this.handleClick}/>
        <List tasks={this.state.taskList}/>

      </div>
    )
  }
}

export default App;
