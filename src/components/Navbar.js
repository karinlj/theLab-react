import React from "react";
import { NavLink } from "react-router-dom";
import ToggleBtn from "./SideDrawer/ToggleBtn";

const Navbar = props =>
  <nav className="nav">
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            {/* passed prop from App.js where function is*/}
            <ToggleBtn click={props.handleDrawerClick} />
          </div>
          <h2 className="logo">
            <NavLink to="/">theLab</NavLink>
          </h2>

          <ul className="links">
            <li>
              Getting started
              <ul className="sub-list">
                <li>
                  <NavLink to="/introduction">Introduction</NavLink>
                </li>
                <li>
                  <NavLink to="/overview">Overview of the tool</NavLink>
                </li>
              </ul>
            </li>

            <li>
              Handling lists and forms
              <ul className="sub-list">
                <li>
                  <NavLink to="/todoList">Sorted list</NavLink>
                </li>
                <li>
                  <NavLink to="/randomTodoList">Unsorted list</NavLink>
                </li>
                <li>
                  <NavLink to="/form">Form validation</NavLink>
                </li>
              </ul>
            </li>

            <li>
              Timing
              <ul className="sub-list">
                <li>
                  <NavLink to="/speed">Speed</NavLink>
                </li>
                <li>
                  <NavLink to="/wait">Wait</NavLink>
                </li>
              </ul>
            </li>
            <li>
              Bug reporting
              <ul className="sub-list">
                <li>
                  <NavLink to="/visualBugs">Visual bugs</NavLink>
                </li>
              </ul>
            </li>

            <li>
              Conditional logic
              <ul className="sub-list">
                <li>
                  <NavLink to="/yellowOrRed">Yellow or red</NavLink>
                </li>
                <li>
                  <NavLink to="/catOrDog">Cat or dog</NavLink>
                </li>
              </ul>
            </li>

            <li>
              DOM changes
              <ul className="sub-list">
                <li>
                  <NavLink to="/scramble">Scramble items</NavLink>
                </li>
                <li>
                  <NavLink to="/scrambleMulti">Multi-scramble</NavLink>
                </li>
              </ul>
            </li>

            <li>
              Using data
              <ul className="sub-list">
                <li>
                  <NavLink to="/concatStrings">Concat strings</NavLink>
                </li>
              </ul>
            </li>

            <li>
              Users and roles
              <ul className="sub-list">
                <li>
                  <NavLink to="/randomLogin">Random login</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Role-based login</NavLink>
                </li>
              </ul>
            </li>
            <li>
              CI server
              <ul className="sub-list">
                <li>
                  <NavLink to="/runningCli">Running from CLI</NavLink>
                </li>
                <li>
                  <NavLink to="/ciIntegration">CI integration</NavLink>
                </li>
              </ul>
            </li>
            {/*   <li><NavLink to="/test">Test</NavLink></li>  */}
          </ul>
        </div>
      </div>
    </div>
  </nav>;
export default Navbar;
