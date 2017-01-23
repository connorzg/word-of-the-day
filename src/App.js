import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

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
        <p className="definition" key={i}>{i+1}. {definitions[i].text}</p>
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
      <div className="container">
        <h1 id="word">{this.state.word}</h1>
        <div className="def">{definitions}</div>
      </div>

    );
  }
}

export default App;
