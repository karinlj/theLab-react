
import React from 'react'

const Sidebar = props => {

    const heading = props.heading;
    const text = props.text;

    return (
        <div className="sidebar-section" >
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Sidebar