import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myList: ['jeff', 'emily', 'danielle', 'austin', 'luke', 'wyatt', 'allison', 'grant', 'tessa'],
      filter: '',
    }
  }

  handleChange(val) {
    this.setState({filter: val})
  }

  render() {
    let origList = this.state.myList;
    let condition = this.state.filter;
    let filteredList = origList.filter((ele, i) => ele.includes(condition));
    let dispList = filteredList.map((ele, i) => {
      return <h2 key={i}>{ele}</h2>;
    })
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        {dispList}
      </div>
    )
  }
}

export default App;
