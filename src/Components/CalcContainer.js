import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function CalcContainer() {
  const [currentInput, setCurrentInput] = useState('0');
  const [currentSum, setCurrentSum] = useState([]);

  const inputItem = newDigit => {
    console.log(newDigit);
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
        inputItem={inputItem}
        clear={clear}
        evaluate={evaluate}
      />
    </div>
  );
}

export default CalcContainer;


/* 
What do I need to keep track of?

- The current sum - should this be a string? An array?  - 
- The current input. Is it a number? Does it start with a zero? Does it contain a decimal point? - 
- If the current input is a operator, how do we deal with double presses? 
- How do we deal with the minus button? 
- We need to check that the last item in the current sum before evaluating to ensure the sum makes sense
- When we are finished evaluating we need to have the anwsered stored ready for use with the next operation.
- Clear must restart everything 
*/

// Input order of statement:
// 1.) Is the current sum  of zero length? if so, the way we handle certain cases is different
// 2.) If not, what was the previous entry? If it was a symbol and the next digit is a symbol, 
// we must overwrite it. Unless of course it is a '-' which would indicate a negative number. 
// 
