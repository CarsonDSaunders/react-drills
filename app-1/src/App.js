import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  handleChange(val) {
    this.setState( {text: val} )
  }

  render() {
    return(
      <div>
        <input onChange={ e => this.handleChange(e.target.value) } type='text' />
        <br/>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default App;
