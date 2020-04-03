import React from 'react';

function Button(props) {
    return(
        <div className={props.type} id={props.id}>
            {props.value}
        </div>
    )
}

export default Button;