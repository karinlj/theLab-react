import React from 'react';

//functional/stateless component accepting prop
const HeaderText = props => {

    //console.log(props);

    //destructuring: store the props in a variable
    // const { cssClass, click, title } = props;
    //only need to output them like {click}

    return (
        <div>
            <h1>{props.itemProp.heading}</h1>
            <p>{props.itemProp.text.split('\n').map((item, key) => {  //line breaks
                return (
                    <span key={key}>{item}<br /></span>
                )
            })}</p>

        </div>
    );
};

export default HeaderText