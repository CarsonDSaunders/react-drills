import React from 'react';
import './App.css';
import Image from './Image.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image source='https://via.placeholder.com/500' />
      </div>
    )
  }
}

export default App;
