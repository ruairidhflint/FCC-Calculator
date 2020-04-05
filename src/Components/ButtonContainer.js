import React from 'react';

import Button from './RegButton';

function ButtonContainer(props) {
  return (
    <div className="button-container">
      <div className="button-row">
        <Button
          id="clear"
          input={props.clear}
          type="horizontal"
          value="Clear"
        />
        <Button
          id="multiply"
          input={props.inputOperator}
          type="reg"
          value="*"
        />
        <Button id="divide" input={props.inputOperator} type="reg" value="/" />
      </div>
      <div className="button-row">
        <Button id="seven" input={props.inputDigit} type="reg" value="7" />
        <Button id="eight" input={props.inputDigit} type="reg" value="8" />
        <Button id="nine" input={props.inputDigit} type="reg" value="9" />
        <Button id="add" input={props.inputOperator} type="reg" value="+" />
      </div>
      <div className="button-row">
        <Button id="four" input={props.inputDigit} type="reg" value="4" />
        <Button id="five" input={props.inputDigit} type="reg" value="5" />
        <Button id="six" input={props.inputDigit} type="reg" value="6" />
        <Button
          id="subtract"
          input={props.inputOperator}
          type="reg"
          value="-"
        />
      </div>
      <div className="big-row">
        <div className="big-row-left">
          <div className="big-row-sub">
            <Button
              id="one"
              input={props.inputDigit}
              type="reg-big"
              value="1"
            />
            <Button
              id="two"
              input={props.inputDigit}
              type="reg-big"
              value="2"
            />
            <Button
              id="three"
              input={props.inputDigit}
              type="reg-big"
              value="3"
            />
          </div>
          <div className="big-row-sub">
            <Button
              id="zero"
              input={props.inputDigit}
              type="horizontal-big"
              value="0"
            />
            <Button
              id="decimal"
              input={props.inputDigit}
              type="reg-big"
              value="."
            />
          </div>
        </div>
        <div className="big-row-right">
          <Button
            id="equals"
            input={props.evaluate}
            type="vertical"
            value="="
          />
        </div>
      </div>
    </div>
  );
}

export default ButtonContainer;
