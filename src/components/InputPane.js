import React, { Component } from 'react';

export default class InputPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [
        'h1 Heading\n===\n\n',
        'h2 Heading\n---\n\n',
        'h3 Heading\n\n',
        'Paragraph.\n\n',
        'Leave 2 spaces at the end of a line to do a  \nline break\n\n',
        'Text attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n',
        'Unordered list:\n  * apples\n  * oranges\n  * pears\n\n',
        'Numbered list:\n  1. apples\n  2. oranges\n  3. pears\n\n',
        'by [Keith Rodriguez](http://www.keithrodriguez.me)'
      ].join('')
    };
  }

  componentDidMount() {
    this.props.handleInputChange(this.state.input);
  }

  onInputChange(input) {
    this.setState({ input });
    this.props.handleInputChange(input);
  }

  render() {
    return (
      <textarea
        className="input-pane"
        wrap="off"
        value={this.state.input}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }
}
