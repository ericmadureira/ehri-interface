import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchButton from '../components/SearchButton';
import ResultBox from '../components/ResultBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: '{ Country(id: "it") { name situation } }',
      resultfield: ''
    }
  }

  fetchData = () => {
    window.fetch('https://portal.ehri-project.eu/api/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: '{ Country (id: "us") { name situation } }'
      })
    })
    .then(response => JSON.stringify(response.json()))
    .then(result => this.setState({ resultfield: result }));
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">EHRI Interface</h1>
          <h2>Retrieve data from the EHRI GraphQL API</h2>
        </header>
        <p className="App-intro">
          Enter a valid GraphQL Query based on EHRI documentation.
        </p>
        <p>
          More at <br/>
          <u>
            https://portal.ehri-project.eu/api/graphql<br/>
            https://portal.ehri-project.eu/api/v1
          </u>
        </p>
        <SearchBox />        
        <SearchButton fetchData={this.fetchData}/>        
        <ResultBox />
      </div>
    );
  }
}

export default App;