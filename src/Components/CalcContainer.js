import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');
  const [currentSum, setCurrentSum] = useState([]);
  const [settings, setSettings] = useState({
    minus: false,
    evaluated: false,
  });

  const inputDigit = (newDigit) => {
    setSettings({ ...settings, evaluated: false });
    if (
      currentInput === '+' ||
      currentInput === '*' ||
      currentInput === '/' ||
      currentInput === '-'
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

  const inputOperator = (newOperator) => {
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
      if (!settings.evaluated) {
        setCurrentSum([...currentSum, currentInput, newOperator]);
        setCurrentInput(newOperator);
      } else {
        setCurrentSum([...currentSum, newOperator]);
        setCurrentInput(newOperator);
      }
    }
  };

  const minusOperator = (negative) => {
    console.log(negative);
    // What are the potential options?
    // 1.) We are trying to set a negative number
    if (currentInput === '0') {
      setCurrentInput('-');
    } else if (!isNaN(currentInput)) {
      setSettings({ ...settings, minus: true });
      setCurrentSum([...currentSum, currentInput, negative]);
      setCurrentInput(negative);
    }
    // 2.) We are trying to minus a number
  };

  const clear = () => {
    setCurrentInput('0');
    setCurrentSum([]);
  };

  const evaluate = () => {
    setSettings({ ...settings, evaluated: true });
    if (isNaN(currentInput)) {
      const answer = math.evaluate(
        currentSum.slice(0, currentSum.length - 1).join(''),
      );
      const corrected =
        answer % 1 === 0 ? answer : parseFloat(answer).toFixed(4);

      setCurrentSum([corrected]);
      setCurrentInput(corrected);
    } else {
      const answer = math.evaluate([...currentSum, currentInput].join(''));
      const corrected =
        answer % 1 === 0 ? answer : parseFloat(answer).toFixed(4);
      setCurrentSum([corrected]);
      setCurrentInput(corrected);
    }
  };

  return (
    <div className="container">
      <Display currentInput={currentInput} currentSum={currentSum} />
      <ButtonContainer
        inputDigit={inputDigit}
        inputOperator={inputOperator}
        minusOperator={minusOperator}
        clear={clear}
        evaluate={evaluate}
      />
    </div>
  );
}

export default CalcContainer;

// Current problems
// 1.) No handling of negative values or the minus operator
// Responsiveness.
