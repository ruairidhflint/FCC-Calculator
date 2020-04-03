import React from 'react';

function Display(props) {
    return (
        <div className="display">
            <p>{props.currentSum}</p>
            <h2>{props.currentEntry}</h2>
        </div>
    )
}

Display.defaultProps = {
    currentSum: '123 + 456 - 7',
    currentEntry: '789'
}

export default Display;