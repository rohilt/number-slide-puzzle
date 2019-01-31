import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Motion, spring} from 'react-motion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {a: true};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.setState({a: !this.state.a})}> try this </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Motion style={{x: spring(this.state.a ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
        </header>
      </div>
    );
  }
}

export default App;
