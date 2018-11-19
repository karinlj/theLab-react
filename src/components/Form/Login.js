import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
import MainBtn from '../MainBtn';
import HeaderText from '../HeaderText';

class Login extends Component { //class based component
    state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        loggedInText: '',
        formClass: 'form show',
        loggedinClass: 'loggedin'
    }

    handleChange = (e) => {
        this.setState({ //value= what user types in
            [e.target.name]: e.target.value
        })
    };

    validate = () => {
        let isError = false;
        const errors = {
            emailError: '',
            passwordError: ''
        };

        if (this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailError = 'Please fill out valid email';
        }
        if (this.state.password.length < 8) {
            isError = true;
            errors.passwordError = 'Password needs to be al least 8 characters';
            // alert('Password needs to be al least 8 characters');
        }

        this.setState(errors);

        return isError;
    };

    handleLogin = (e) => {
        e.preventDefault();
        // console.log(this.state);
        console.log(this.state.email, this.state.password);

        const err = this.validate(); //calling validate-func

        if (!err) {
            this.loggedIn();

            this.setState({ //clear form
                email: '',
                emailError: '',
                password: '',
                passwordError: '',
                formClass: 'form',
                loggedinClass: 'loggedin show'
            })
        }
    }

    loggedIn = () => {
        this.setState({ //clear form
            loggedInText: this.state.email
        })
    }

    handleLogout = () => {
        alert('logout');

        this.setState({ //clear form
            formClass: 'form show',
            loggedinClass: 'loggedin'
        })
    }

    render() {

        return (
            <div className="row justify-content-between" >
                <div className="col-12 col-md-6">
                    <div className="login-section">
                        <header>
                            <header>
                                <HeaderText componentName="login" />

                            </header>
                        </header>

                        {/*  <MainBtn classProp="button green-btn" clickProp={this.login}>Login</MainBtn> */}
                        <div className={this.state.formClass}>
                            <form className="form-validation" action="">

                                <input name='email' type="email"
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)} />
                                <span className="warn">{this.state.emailError}</span>

                                <input name='password' type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)} />
                                <span className="warn">{this.state.passwordError}</span>

                                <SubmitBtn clickProp={this.handleLogin}>Log in</SubmitBtn>

                            </form>
                        </div>

                        <div className={this.state.loggedinClass}>
                            <div className="loginBar">
                                <div>
                                    <p>Logged in as:</p>
                                    <h4>{this.state.loggedInText}</h4>
                                </div>


                                <MainBtn classProp="button red-btn" clickProp={this.handleLogout}>Log out</MainBtn>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="login" />
                </div>

            </div>
        );
    }
}

export default Login