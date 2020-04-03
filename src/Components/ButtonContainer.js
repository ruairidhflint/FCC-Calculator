import React from 'react';

import Button from './RegButton';

function ButtonContainer(props) {
  return (
    <div className="button-container">
      <div className="button-row">
        <Button type="horizontal" value="Clear" />
        <Button type="reg" value="X" />
        <Button type="reg" value="%" />
      </div>
      <div className="button-row">
        <Button input={props.numberInput} type="reg" value="7" />
        <Button input={props.numberInput} type="reg" value="8" />
        <Button input={props.numberInput} type="reg" value="9" />
        <Button type="reg" value="+" />
      </div>
      <div className="button-row">
        <Button input={props.numberInput} type="reg" value="4" />
        <Button input={props.numberInput} type="reg" value="5" />
        <Button input={props.numberInput} type="reg" value="6" />
        <Button type="reg" value="-" />
      </div>
      <div className="big-row">
        <div className="big-row-left">
          <div className="big-row-sub">
            <Button input={props.numberInput} type="reg-big" value="1" />
            <Button input={props.numberInput} type="reg-big" value="2" />
            <Button input={props.numberInput} type="reg-big" value="3" />
          </div>
          <div className="big-row-sub">
            <Button input={props.numberInput} type="horizontal-big" value="0" />
            <Button input={props.numberInput} type="reg-big" value="." />
          </div>
        </div>
        <div className="big-row-right">
          <Button type="vertical" value="=" />
        </div>
      </div>
    </div>
  );
}

export default ButtonContainer;
