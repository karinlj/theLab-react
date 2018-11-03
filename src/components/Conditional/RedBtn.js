import React from 'react';
import './Conditional.scss';

//functional/stateless component accepting prop
const RedBtn = props => (
    // passed prop from CorrectBtn.js

    <button className="button red-btn" value="green" onClick={props.click}>
        Red
    </button>
)
export default RedBtn