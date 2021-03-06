
import React from 'react';
import HeaderData from '../data/headerData.json'; //HeaderData: made up name for the json data

const Sidebar = props => {

    /*  const heading = props.heading;
     const text = props.text; */

    const componentName = props.componentName;

    return (
        <div className="sidebar-section" >

            {/* bracket notation for refering to a variable? */}
            <h4>{HeaderData[componentName].sidebarHeading}</h4>

            <p>{HeaderData[componentName].sidebarText.split('\n').map((item, key) => {
                return (
                    <span key={key}>{item}<br /></span>
                )
            })}</p>

        </div>
    )
}

export default Sidebar

