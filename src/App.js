import React, { Component } from 'react';
import emojis from './emojis.json';
import './App.css';

const emojiList = emojis.map((emojis) => <li key={emojis.key}>{emojis.key} {emojis.translation}</li>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">mathemoji</h1>
        </header>
        <p className="App-intro">
        </p>
        <ul>{emojiList}</ul>
      </div>
    );
  }
}

export default App;
