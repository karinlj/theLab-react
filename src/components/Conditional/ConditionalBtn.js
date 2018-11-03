import React from 'react';
import './Conditional.scss';

//functional/stateless component accepting prop
const ConditionalBtn = props => (

    <button className={props.class} onClick={props.click}>  {/* className={props.class} */}
        {props.title}
    </button>
)
export default ConditionalBtn