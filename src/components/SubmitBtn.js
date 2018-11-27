import React from 'react';

//functional/stateless component accepting props
const SubmitBtn = props => {

    //props are OUTPUT here 
    return (
        <button className="button btn-submit" onClick={props.clickProp}>
            {props.children}

        </button>
    );
};

export default SubmitBtn