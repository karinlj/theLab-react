import Login from "./Login";
import React, { Component } from "react";
import "./Form.scss";
import Sidebar from "../Sidebar";
import SubmitBtn from "../SubmitBtn";
import MainBtn from "../MainBtn";
import HeaderText from "../HeaderText";
import Lion from "../../img/lion.jpeg";
import Zebra from "../../img/zebra.jpeg";
import Lemur from "../../img/lemur.jpg";
import AccountData from "../../data/accounts.json";
import LoginOptions from "./LoginOptions";

class RandomLogin extends Login {
  randomLogin = () => {
    alert("random");
  };
  render() {
    // returned object of values from displayPictAndBtns-func put in variable
    let displayThings = this.displayPictAndBtns();

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="login-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            {/* loginView  */}
            <div className={this.state.formClass}>
              <LoginOptions />

              <form className="form-validation" action="">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <span className="warn">
                  {this.state.errorText}
                </span>

                <SubmitBtn clickProp={this.handleLogin}>Log in</SubmitBtn>
                {/*    <MainBtn
                  classProp="button orange-btn random-login"
                  clickProp={this.randomLogin}
                >
                  Random login
                </MainBtn> */}
              </form>
            </div>

            {/* logoutView */}
            <div className={this.state.loggedinClass}>
              <div className="loginBar">
                <div>
                  <p>Logged in as:</p>
                  <div className="user">
                    {/* returned value from displayPictAndBtns-func */}
                    {displayThings.animal}

                    <h5>
                      {this.state.loggedInText}
                    </h5>
                  </div>
                </div>

                <MainBtn
                  classProp="button red-btn"
                  clickProp={this.handleLogout}
                >
                  Log out
                </MainBtn>
              </div>
              <div className="permissions">
                <p>
                  Since I am the <strong>{this.state.role}</strong>, I have
                  access to these buttons:
                </p>

                {/* returned value from displayPictAndBtns-func */}
                {displayThings.btns}
              </div>
              {this.state.btnMessage}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
        </div>
      </div>
    );
  }
}

export default RandomLogin;
