import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');
  const [currentSum, setCurrentSum] = useState([]);

  const inputDigit = newDigit => {
    console.log(newDigit);
  };

  const inputOperator = newOperator => {
    console.log(newOperator);
  };

  const clear = () => {
    setCurrentInput('0');
    setCurrentSum([]);
  };

  const evaluate = () => {
    console.log(currentSum);
  };

  return (
    <div className="container">
      <Display currentInput={currentInput} currentSum={currentSum} />
      <ButtonContainer
        inputDigit={inputDigit}
        inputOperator={inputOperator}
        clear={clear}
        evaluate={evaluate}
      />
    </div>
  );
}

export default CalcContainer;
