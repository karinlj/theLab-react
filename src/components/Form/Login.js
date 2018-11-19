import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
import MainBtn from '../MainBtn';
import HeaderText from '../HeaderText';
import Lion from '../../img/lion.jpeg';
import Zebra from '../../img/zebra.jpeg';
import Lemur from '../../img/lemur.jpg';

class Login extends Component { //class based component
    state = {
        email: '',
        password: '',
        errorMess: '',
        loggedInText: '',
        formClass: 'form show',
        loggedinClass: 'loggedin',
        account: ['username', 'password', 'role'],

    }

    handleChange = (e) => {
        this.setState({ //value= what user types in
            [e.target.name]: e.target.value
        })
    };


    validate = () => {

    }

    handleLogin = (e) => {
        e.preventDefault();
        // console.log(this.state);
        console.log(this.state.email, this.state.password);

        //const err = this.validate(); //calling validate-func

        // if (!err) {
        this.loggedIn();

        this.setState({ //clear form
            email: '',
            password: '',
            formClass: 'form',
            loggedinClass: 'loggedin show'
        })
        //}
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


    /*    validate = () => {
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
       }; */

    render() {

        return (
            <div className="row justify-content-between" >
                <div className="col-12 col-md-6">
                    <div className="login-section">
                        <header>
                            <HeaderText componentName="login" />

                        </header>

                        <div className={this.state.formClass}>
                            <div className="login-options">
                                <div className="login-option">
                                    <h5>Role</h5>
                                    <h5>Username</h5>
                                    <h5>Password</h5>
                                </div>
                                <div className="login-option">
                                    <p>Lion</p>
                                    <p>lion@thelab.com</p>
                                    <p>iamthelion</p>
                                </div>

                                <div className="login-option">
                                    <p>Zebra</p>
                                    <p>zebra@thelab.com</p>
                                    <p>iamthezebra</p>
                                </div>
                                <div className="login-option">
                                    <p>Lemur</p>
                                    <p>lemur@thelab.com</p>
                                    <p>iamthelemur</p>
                                </div>
                            </div>

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
                                    <div className="user">
                                        <img src={Lion} alt="" />
                                        <h5>{this.state.loggedInText}</h5>
                                    </div>
                                </div>
                                <MainBtn classProp="button red-btn" clickProp={this.handleLogout}>Log out</MainBtn>
                            </div>
                            <div className="permissions">

                                <p>Since I am <strong>the Lion</strong>, I have access to these buttons:</p>
                                <div className="btns">
                                    <MainBtn classProp="button pink-btn" clickProp={this.handleClick}>one</MainBtn>
                                    <MainBtn classProp="button orange-btn" clickProp={this.handleClick}>two</MainBtn>
                                    <MainBtn classProp="button yellow-btn" clickProp={this.handleClick}>three</MainBtn>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="login" />
                </div>

            </div >
        );
    }
}

export default Login