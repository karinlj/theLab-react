import React from 'react';

//functional/stateless component accepting prop
const Headertext = props => {

    //console.log(props);

    //destructuring: store the props in a variable
    // const { cssClass, click, title } = props;
    //only need to output them like {click}

    return (
        <div className={props.classProp} onClick={props.clickProp} >
            {props.titleProp}

            {/* props are OUTPUT here */}
        </div>
    );
};

export default Headertext