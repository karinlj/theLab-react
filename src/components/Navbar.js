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
                        <li>Forms manipulation and testing
                            <ul className="sub-list">
                                <li><NavLink to="/form">Form validation</NavLink></li>
                            </ul>
                        </li>

                        <li>Lists
                            <ul className="sub-list">
                                <li><NavLink to="/todoList">TodoList</NavLink></li>
                            </ul>
                        </li>

                        <li>Blog
                        <ul className="sub-list">
                                <li><NavLink to="/blog">Blog</NavLink></li>
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

                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
export default Navbar