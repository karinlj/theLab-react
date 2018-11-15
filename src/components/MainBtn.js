import React from 'react';

//functional/stateless component accepting prop
const MainBtn = props => {

    //console.log(props);

    //destructuring: store the props in a variable
    // const { cssClass, click, title } = props;
    //only need to output them like {click}

    return (
        <button className={props.classProp} id={props.idProp} onClick={props.clickProp} >
            {props.children}

            {/* props are OUTPUT here , but reusable from here*/}
        </button>
    );
};

export default MainBtn