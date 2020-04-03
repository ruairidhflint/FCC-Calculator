import React, { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';

function CalcContainer() {
    const [currentInput, setCurrentInput] = useState('0');

    const inputNumber = (newDigit) => {
        setCurrentInput(currentInput + newDigit);
    }
    return (
    <div className="container">
        <Display currentInput={currentInput} />
        <ButtonContainer numberInput={inputNumber}/>
    </div>
    )
}

export default CalcContainer;