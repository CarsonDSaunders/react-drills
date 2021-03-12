import React from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      taskList: [],
    }

    this.handleClick = this.handleClick.bind( this )
  }

  handleChange(val) {
    this.setState({input: val})
  }

  handleClick() {
    let intList = this.state.taskList;
    intList.push(this.state.input);
    this.setState({taskList: intList});

  }

  render() {
    let intList = this.state.taskList;
    let listItems = intList.map((ele, i) => {
      return <li key={i}>{ele}</li>
    });

    return (
      <div>
        <h1>The To-Do List</h1>
        <input onChange={e => this.handleChange(e.target.value)}/>
        <button onClick={this.handleClick}>Add Task</button>
        <Todo tasks={listItems} />
      </div>
    )
  }
}

export default App;
