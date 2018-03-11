import React from 'react';

const OutputPane = (props) => {
  return (
    <div
      className="output-pane"
      dangerouslySetInnerHTML={props.createMarkup()}
    />
  );
};

export default OutputPane;
