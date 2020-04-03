import React from 'react';

function Button(props) {
  return (
    <div
      onClick={() => props.input(props.value)}
      className={props.type}
      id={props.id}
    >
      {props.value}
    </div>
  );
}

export default Button;
