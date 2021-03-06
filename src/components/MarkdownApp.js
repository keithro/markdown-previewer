import React, { Component } from 'react';
import marked from 'marked';
import Header from './Header';
import InputPane from './InputPane';
import OutputPane from './OutputPane';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };
    // this.createMarkup = this.createMarkup.bind(this); // using arrow function below instead
  }

  createMarkup = () => {
    const results = marked(this.state.input, {
      // gfm: true,
      sanitize: true,
    });
    return { __html: results };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <InputPane handleInputChange={input => this.setState({ input })} />
        <OutputPane createMarkup={this.createMarkup} />
      </div>
    );
  }
}
