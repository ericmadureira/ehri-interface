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

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value})
  }

  fetchData = () => {
    fetch('https://portal.ehri-project.eu/api/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: this.state.searchfield
      })
    })
    .then(response => response.json())
    // .then(result => console.log(result));
    .then(result => this.setState({ resultfield: JSON.stringify(result.data) }));
  }

  render() {
    const { resultfield, searchfield } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">EHRI Interface</h1>
          <h2>Retrieve data from the EHRI GraphQL API</h2>
        </header>
        <p className="App-intro">
          Enter a valid GraphQL Query based on EHRI documentation<br/><br/>
          <a href="https://portal.ehri-project.eu/api/graphql">https://portal.ehri-project.eu/api/graphql</a><br/>
          <a href="https://portal.ehri-project.eu/api/v1">https://portal.ehri-project.eu/api/v1</a>
        </p>
        <SearchBox search={searchfield} onchange={this.onSearchChange} />
        <SearchButton fetchData={this.fetchData} />
        <ResultBox result={resultfield} />
      </div>
    );
  }
}

export default App;