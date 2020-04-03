import React from 'react';

function Display(props) {
  return (
    <div id="display">
      <p>{props.currentSum}</p>
      <h2>{props.currentInput}</h2>
    </div>
  );
}

Display.defaultProps = {
  currentSum: '123 + 456 - 7',
  currentInput: '789',
};

export default Display;
