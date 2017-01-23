import React, {Component} from 'react';
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
      this.setState({word: data.word, definitions: data.definitions});
    });
  }

  _getDefinition() {
    let defs = [];
    let definitions = this.state.definitions;

    for (var i = 0; i < definitions.length; i++) {
      defs.push(
        <p className="definition" key={i}>{definitions[i].text}</p>
      );
    }
    return <div>{defs}</div>;
  }

  componentWillMount() {
    this._getWordOfTheDay();
  }

  render() {

    let definitions = this._getDefinition();

    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.word}</h2>
          <div>{definitions}</div>
        </div>
      </div>
    );
  }
}

export default App;
