import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');
  const [currentSum, setCurrentSum] = useState('');

  const inputNumber = newDigit => {
    if (
      currentInput === '+' ||
      currentInput === '-' ||
      currentInput === '*' ||
      currentInput === '/'
    ) {
      setCurrentInput(newDigit);
    } else if (currentInput === '0' && newDigit === '.') {
      setCurrentInput('0.');
    } else if (currentInput === '0') {
      setCurrentInput(newDigit);
    } else if (currentInput.length >= 8) {
      return null;
    } else if (newDigit === '.') {
      if (currentInput.indexOf('.') === -1) {
        setCurrentInput(currentInput + newDigit);
      } else {
        return null;
      }
    } else {
      setCurrentInput(currentInput + newDigit);
    }
  };

  const clear = () => {
    setCurrentInput('0');
    setCurrentSum('');
  };

  const inputOperator = newOperator => {
    if (
      currentInput === '+' ||
      currentInput === '-' ||
      currentInput === '*' ||
      currentInput === '/'
    ) {
      return null;
    }
    setCurrentSum(
      currentSum
        ? currentSum + ' ' + currentInput + ' ' + newOperator
        : currentInput + ' ' + newOperator,
    );
    setCurrentInput(newOperator);
  };

  const evaluate = () => {
      setCurrentInput(math.evaluate(currentSum + currentInput));
      setCurrentSum(math.evaluate(currentSum + currentInput));
  };

  return (
    <div className="container">
      <Display currentInput={currentInput} currentSum={currentSum} />
      <ButtonContainer
        numberInput={inputNumber}
        clear={clear}
        operatorInput={inputOperator}
        evaluate={evaluate}
      />
    </div>
  );
}

export default CalcContainer;


/* 
What do I need to keep track of?

- The current sum - should this be a string? An array? 
- The current input. Is it a number? Does it start with a zero? Does it contain a decimal point?
- If the current input is a operator, how do we deal with double presses? 
- How do we deal with the minus button? 
- We need to check that the last item in the current sum before evaluating to ensure the sum makes sense
- When we are finished evaluating we need to have the anwsered stored ready for use with the next operation.
- Clear must restart everything 

*/
