import React from 'react';

import Button from './RegButton';

function ButtonContainer(props) {
  return (
    <div className="button-container">
      <div className="button-row">
        <Button id="clear" type="horizontal" value="Clear" />
        <Button id="multiply" type="reg" value="X" />
        <Button id="divide" type="reg" value="%" />
      </div>
      <div className="button-row">
        <Button id="seven" input={props.numberInput} type="reg" value="7" />
        <Button id="eight" input={props.numberInput} type="reg" value="8" />
        <Button id="nine" input={props.numberInput} type="reg" value="9" />
        <Button id="add" type="reg" value="+" />
      </div>
      <div className="button-row">
        <Button id="four" input={props.numberInput} type="reg" value="4" />
        <Button id="five" input={props.numberInput} type="reg" value="5" />
        <Button id="six" input={props.numberInput} type="reg" value="6" />
        <Button id="subtract" type="reg" value="-" />
      </div>
      <div className="big-row">
        <div className="big-row-left">
          <div className="big-row-sub">
            <Button id="one" input={props.numberInput} type="reg-big" value="1" />
            <Button id="two" input={props.numberInput} type="reg-big" value="2" />
            <Button id="three" input={props.numberInput} type="reg-big" value="3" />
          </div>
          <div className="big-row-sub">
            <Button
              id="zero"
              input={props.numberInput}
              type="horizontal-big"
              value="0"
            />
            <Button id="decimal" input={props.numberInput} type="reg-big" value="." />
          </div>
        </div>
        <div className="big-row-right">
          <Button id="equals" type="vertical" value="=" />
        </div>
      </div>
    </div>
  );
}

export default ButtonContainer;
