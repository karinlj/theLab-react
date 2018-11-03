import React from 'react';
import './Conditional.scss';

//functional/stateless component accepting prop
const YellowBtn = props => (
    // passed prop from CorrectBtn.js

    <button className="button yellow-btn" value="yellow" onClick={props.click}>
        Yellow
    </button>
)
export default YellowBtn