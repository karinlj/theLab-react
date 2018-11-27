import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

//functional/stateless component
const SideDrawer = props => {

    let drawerClasses = ['side-drawer']; //sätta klasser
    //if show = true
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <nav className={drawerClasses}>
                        <ul className="links">
                            <li>Filling Forms
                            <ul className="sub-list">
                                    <li><NavLink to="/form">Form validation</NavLink></li>
                                </ul>
                            </li>

                            <li>Timing
                                 <ul className="sub-list">
                                    <li><NavLink to="/speed">Speed</NavLink></li>
                                    <li><NavLink to="/wait">Wait</NavLink></li>
                                </ul>
                            </li>

                            <li>Handling lists
                            <ul className="sub-list">
                                    <li><NavLink to="/todoList">Sorted List</NavLink></li>
                                    <li><NavLink to="/todoList">Unsorted List</NavLink></li>
                                </ul>
                            </li>

                            <li>Conditional logic
                                <ul className="sub-list">
                                    <li><NavLink to="/yellowOrRed">Red or Yellow</NavLink></li>
                                    <li><NavLink to="/catOrDog">Cat or Dog</NavLink></li>
                                </ul>
                            </li>

                            <li>Using data
                                 <ul className="sub-list">
                                    <li><NavLink to="/concatStrings">Concat strings</NavLink></li>
                                </ul>
                            </li>

                         

                            <li>DOM changes
                                 <ul className="sub-list">
                                    <li><NavLink to="/scramble">Scramble</NavLink></li>
                                    <li><NavLink to="/changingControls">Word scramble</NavLink></li>
                                </ul>
                            </li>

                            <li>Users and roles
                                 <ul className="sub-list">
                                    {/* <li><NavLink to="/login">Random login</NavLink></li> */}
                                    <li><NavLink to="/login">Random login</NavLink></li>
                                    <li><NavLink to="/login">Role-based login</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to="/about">About</NavLink></li>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default SideDrawer   