import React from 'react';
import HeaderData from '../data/headerData.json';

//functional/stateless component accepting prop
const HeaderText = props => {

    //console.log(props);

    //destructuring: store the props in a variable
    // const { cssClass, click, title } = props;
    //only need to output them like {click}
    let componentName = props.componentName;
    return (
        <div>
            <h1>{HeaderData[componentName].heading}</h1>  {/* bracket notation for refering to a variable */}
            <p>{HeaderData[componentName].text.split('\n').map((item, key) => {  //line breaks
                return (
                    <span key={key}>{item}<br /></span>
                )
            })}</p>

        </div>
    );
};

export default HeaderText