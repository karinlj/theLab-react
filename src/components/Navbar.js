import React from 'react'
import { NavLink } from 'react-router-dom'
import ToggleBtn from './SideDrawer/ToggleBtn';

//functional/stateless component accepting prop
const Navbar = props => (

    <nav className="nav" >
        <div className="container">
            <div className="row">
                <div className="col">

                    <div>
                        {/* passed prop from App.js */}
                        <ToggleBtn click={props.handleDrawerClick} />
                    </div>
                    <h2 className="logo"><NavLink to="/">theLab</NavLink></h2>

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
                                 <li><NavLink to="/randomDOM">RandomDOM</NavLink></li>
                            </ul>
                        </li>

                        <li>Users and roles
                            <ul className="sub-list">
                                <li><NavLink to="/login">Random login</NavLink></li>
                                <li><NavLink to="/login">Role-based login</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/about">About</NavLink></li>
                        {/* <li><NavLink to="/test">Test</NavLink></li> */}

                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
export default Navbar