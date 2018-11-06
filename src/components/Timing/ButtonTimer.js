import React from 'react';
import './Timing.scss';

//functional/stateless component accepting prop

//export default function ButtonTimer(props) {}
const ButtonTimer = props => {

    // props are OUTPUT here 
    //console.log(props);

    const label = props.timerEventsProp.length % 2 === 0
        ? 'Start' :  //if even
        'Stop'  //if odd

    return (  //when click on btn: handleClick func is called (in Timer component)
        <button className="button green-btn"
            onClick={props.handleClickProp}>
            {label}
        </button>
    );
};

export default ButtonTimer