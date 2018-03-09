import React, { Component } from 'react';
import marked from 'marked';
import Header from './Header';
import InputPane from './InputPane';
import OutputPane from './OutputPane';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.parseInput = this.parseInput.bind(this);
  }

  parseInput(text) {
    const results = marked(text);
    this.setState({ results });
  }

  // componentDidMount() {
  //   this.parseInput();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <InputPane
          handleInputChange={this.parseInput} />
        <OutputPane results={this.state.results} />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <Header />
  //       <InputPane 
  //         text={this.state.text}
  //         handleInputChange={this.parseInput} />
  //       <OutputPane results={this.state.result} />
  //     </div>
  //   );
  // }
}
