import React, { Component } from 'react';

export default class InputPane extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '#Example Text\n------' };
  }

  componentDidMount() {
    this.props.handleInputChange(this.state.text);
    // this.onInputChange(this.state.text);
  }

  onInputChange(text) {
    this.setState({ text });
    this.props.handleInputChange(text);
  }

  render() {
    return (
      <textarea
        className='input-pane'
        wrap='off'
        value={this.state.text}
        onChange={event => this.onInputChange(event.target.value)}
      />
      );
    }
  }
