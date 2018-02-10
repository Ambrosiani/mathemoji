import React, { Component } from 'react';
import autoBind from 'react-autobind';
import emojis from './emojis.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedItem: 'sok'};
    autoBind(this);
  }

  onItemClick(event) {
    if(event.target.innerHTML === '🗒️') {
      this.setState({selectedItem: 'hitta-recept'});
    }
    if(event.target.innerHTML === '🛒') {
      this.setState({selectedItem: 'sok'});
    }
  }

  render() {
    this.emojiList = emojis.map((emojis) => <li key={emojis.key}><a href={'https://www.mathem.se/' + this.state.selectedItem + '?q=' + emojis.translation}>{emojis.key}</a></li>);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">mathemoji</h1>
        </header>
        <p>
        <button className={this.state.selectedItem === 'sok' ? 'selected' : 'notSelected'} onClick={this.onItemClick}>🛒</button>
        <button className={this.state.selectedItem === 'hitta-recept' ? 'selected' : 'notSelected'} onClick={this.onItemClick}>🗒️</button>
        </p>
        <ul>{this.emojiList}</ul>
      </div>
    );
  }
}

export default App;
