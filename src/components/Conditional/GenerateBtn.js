import React from 'react';
import './Conditional.scss';

//functional/stateless component accepting prop
const GenerateBtn = props => (
    // passed prop from CorrectBtn.js

    <button className="button generate-btn" onClick={props.click}>
        {props.title}
    </button>
)
export default GenerateBtn