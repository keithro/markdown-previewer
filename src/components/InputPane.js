import React, { Component } from 'react';

export default class InputPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [
        'h1 Heading\n===\n\n',
        'h2 Heading\n---\n\n',
        '### h3 Heading\n\n',
        'Paragraph.\n\n',
        'Emphasis, aka italics, with * asterisks * or _underscores_.  \n',
        'Strong emphasis, aka bold, with ** asterisks ** or __underscores__.  \n',
        'Combined emphasis with ** asterisks and _underscores_ **.  \n',
        'Strikethrough uses two tildes. ~~Scratch this.~~  \n',
        'Monospace with `backticks`.\n\n',
        '#### Unordered list:\n* use asterisks\n- or minuses\n+ or pluses\n\n',
        '#### Numbered list:\n1. apples\n2. oranges\n3. pears\n\n',
        '#### Code blocks\n```\nvar greeting = "hello world";  \nconsole.log(greeting);  \n```\n\n',
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
      <div className="input-pane">
        <textarea
          className="input"
          wrap="off"
          value={this.state.input}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
