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
                                <li><NavLink to="/concatStrings">Concat strings</NavLink></li>
                            </ul>
                        </li>

                        <li>Timing
                        <ul className="sub-list">
                                <li><NavLink to="/speed">Speed</NavLink></li>
                                <li><NavLink to="/wait">Wait</NavLink></li>
                            </ul>
                        </li>

                        <li>Scramble
                        <ul className="sub-list">
                                <li><NavLink to="/scramble">Scramble</NavLink></li>
                                <li><NavLink to="/changingControls">Changing controls</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/test">Test</NavLink></li>


                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
export default Navbar