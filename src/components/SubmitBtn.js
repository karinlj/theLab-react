import React from 'react';


//functional/stateless component accepting prop
const SubmitBtn = props => {

    //props are OUTPUT here 
    return (
        <button className="button submit-btn" onClick={props.clickProp}>
            {props.titleProp}

        </button>
    );
};

export default SubmitBtn