import React from 'react';


//functional/stateless component accepting prop
const SubmitBtn = props => {

    //props are OUTPUT here 
    return (
        <button className="button btn-submit" onClick={props.clickProp}>
            {props.titleProp}

        </button>
    );
};

export default SubmitBtn