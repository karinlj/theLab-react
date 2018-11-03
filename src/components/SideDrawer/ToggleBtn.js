import React from 'react';
import './ToggleBtn.scss';

//functional/stateless component accepting prop
const ToggleBtn = props => (
    // passed prop from Navbar 

    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line"></div>
        <div className="toggle-btn-line"></div>
        <div className="toggle-btn-line"></div>

    </button>
)
export default ToggleBtn