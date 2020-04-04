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
    if (currentInput === '+' || currentInput === '*' || currentInput === '/') {
      if (newDigit === '.') {
        setCurrentInput('0.');
      } else {
        setCurrentInput(newDigit);
      }
    }

    
    if (currentInput === '0' && newDigit === '.') {
      setCurrentInput('0.');
    } else if (currentInput === '0') {
      if (newDigit === '0') {
        return;
      } else {
        setCurrentInput(newDigit);
      }
    } else if (currentInput.length >= 8) {
      return;
    } else if (newDigit === '.') {
      if (currentInput.indexOf('.') !== -1) {
        return;
      } else {
        setCurrentInput(currentInput + newDigit);
      }
    } else {
      setCurrentInput(currentInput + newDigit);
    }
  };

  const inputOperator = newOperator => {
    console.log(newOperator);
    if (currentInput === '0' && newOperator === '-') {
      setCurrentInput('-');
      return;
    }
    if (currentSum.length === 0 && currentInput === '0') {
      return;
    }

    if (
      currentSum[currentSum.length - 1] === '+' ||
      currentSum[currentSum.length - 1] === '/' ||
      currentSum[currentSum.length - 1] === '*'
    ) {
      const replacement = currentSum.slice();
      replacement[(replacement.length = 1)] = newOperator;
      setCurrentSum(replacement);
      setCurrentInput(newOperator);
      return;
    }

    setCurrentSum([...currentSum, currentInput, newOperator]);
    setCurrentInput(newOperator);
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
