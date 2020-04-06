import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');
  const [currentSum, setCurrentSum] = useState([]);
  const [settings, setSettings] = useState({negative: false, evalueted: false});

  const inputDigit = (newDigit) => {
    if (currentInput === '+' || currentInput === '*' || currentInput === '/') {
      setCurrentInput(newDigit);
    } else if (currentInput === '-') {
      console.log(currentSum);
      if (currentSum[currentSum.length - 1] === '-') {
        setCurrentInput(currentInput + newDigit);
      } else {
        setCurrentInput(newDigit);
      }
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

  const inputOperator = (newOperator) => {
    if (newOperator === '+' || newOperator === '*' || newOperator === '/') {
      if (currentInput === '0') {
        return;
      } else if (
        currentInput === '+' ||
        currentInput === '*' ||
        currentInput === '/'
      ) {
        const currentSumDupe = currentSum.slice(0, currentSum.length - 1);
        setCurrentSum([currentSumDupe, newOperator]);
        setCurrentInput(newOperator);
      } else {
        setCurrentSum([...currentSum, currentInput, newOperator]);
        setCurrentInput(newOperator);
      }
    } else if (newOperator === '-') {
      if (
        currentInput === '+' ||
        currentInput === '*' ||
        currentInput === '/' ||
        currentInput === '0'
      ) {
        setCurrentInput(newOperator);
      } else if (currentSum[currentSum.length - 1] === '-') {
        setCurrentInput(newOperator);
      } else {
        setCurrentSum([...currentSum, currentInput, newOperator]);
        setCurrentInput(newOperator);
      }
    }
  };

  const clear = () => {
    setCurrentInput('0');
    setCurrentSum([]);
  };

  const evaluate = () => {
    if (isNaN(currentInput)) {
      const answer = math.evaluate(
        currentSum.slice(0, currentSum.length - 1).join(''),
      );

      setCurrentSum([answer]);
      setCurrentInput(answer);
    } else {
      const answer = math.evaluate([...currentSum, currentInput].join(''));
      setCurrentSum([answer]);
      setCurrentInput(answer);
    }
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

// Current problems
// 1.) No handling of negative values or the minus operator


// 3.) Weirdness with operations continuing after evaluating
