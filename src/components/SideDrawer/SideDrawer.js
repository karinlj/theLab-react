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
                            <li>Forms
                            <ul className="sub-list">
                                    <li><NavLink to="/form">Form validation</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </ul>
                            </li>

                            <li>Lists
                            <ul className="sub-list">
                                    <li><NavLink to="/todoList">TodoList</NavLink></li>
                                </ul>
                            </li>

                            <li>Conditional logic
                        <ul className="sub-list">
                                    <li><NavLink to="/yellowOrRed">Yellow or Red</NavLink></li>
                                    <li><NavLink to="/catOrDog">Cat or Dog</NavLink></li>
                                </ul>
                            </li>

                            <li>Strings
                        <ul className="sub-list">
                                    <li><NavLink to="/ConcatStrings">Concat strings</NavLink></li>
                                </ul>
                            </li>

                            <li>Timing
                        <ul className="sub-list">
                                    <li><NavLink to="/Speed">Speed</NavLink></li>
                                    <li><NavLink to="/Wait">Wait</NavLink></li>
                                </ul>
                            </li>

                            <li>Scramble
                        <ul className="sub-list">
                                    <li><NavLink to="/scramble">Scramble</NavLink></li>
                                    <li><NavLink to="/changingControls">ChangingControls</NavLink></li>

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