import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myList: ['Seth', 'Amber', 'Hunter', 'Carson', 'Kellen'],
    }

  }

  render() {
    return (
      <ul>
        <li><h2>{this.state.myList[0]}</h2></li>
        <li><h2>{this.state.myList[1]}</h2></li>
        <li><h2>{this.state.myList[2]}</h2></li>
        <li><h2>{this.state.myList[3]}</h2></li>
        <li><h2>{this.state.myList[4]}</h2></li>
      </ul>
    )
  }
}

export default App;
