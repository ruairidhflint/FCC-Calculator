import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');

  const inputNumber = newDigit => {
    if (currentInput === '0' && newDigit === '.') {
      setCurrentInput('0.');
    } else if (currentInput === '0') {
      setCurrentInput(newDigit);
    } else if (currentInput.length >= 8) {
      setCurrentInput(currentInput);
    } else if (newDigit === '.') {
      if (currentInput.indexOf('.') === -1) {
        setCurrentInput(currentInput + newDigit);
      } else {
        setCurrentInput(currentInput);
      }
    } else {
      setCurrentInput(currentInput + newDigit);
    }
  };

  const clear = () => {
    setCurrentInput('0');
  };
  return (
    <div className="container">
      <Display currentInput={currentInput} />
      <ButtonContainer numberInput={inputNumber} clear={clear} />
    </div>
  );
}

export default CalcContainer;
