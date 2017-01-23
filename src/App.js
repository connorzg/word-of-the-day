import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
      super();

      this.state = {
        word: '',
        definitions: []
      }
    }

    _getWordOfTheDay() {
      axios.get('http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then((res) => {
        let data = res.data;
        console.log(data);
        this.setState({ word: data.word, definitions: data.definitions });
      });
     }

    componentWillMount() {
      this._getWordOfTheDay();
    }

    render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.word}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
