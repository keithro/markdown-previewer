import React from 'react';

const OutputPane = (props) => {
  return (
    <div
      className="results"
      dangerouslySetInnerHTML={props.createMarkup()}
    />
  );
};

export default OutputPane;
