import React from 'react';
import './Backdrop.scss';


//functional/stateless component accepting prop

const Backdrop = props => (  //eller:  const Backdrop = (clickBackdrop) => { ??

    <div className="backdrop" onClick={props.clickBackdrop}></div>

)
export default Backdrop;