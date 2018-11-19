import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
import HeaderText from '../HeaderText';
import PrintForm from './PrintForm';

class Form extends Component { //class based component
    state = {
        firstname: '',
        firstnameError: '',
        lastname: '',
        lastnameError: '',
        username: '',
        usernameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',

        printName: '',
        printUsername: '',
        printEmail: '',
        prinPassword: '',
        formPrintClass: 'formPrint'
    }

    handleChange = (e) => {
        this.setState({ //value= what user types in
            [e.target.name]: e.target.value
        })
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstnameError: '',
            lastnameError: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        };

        if (this.state.firstname === '') {
            isError = true;
            errors.firstnameError = 'Please fill out first name';
        }
        if (this.state.lastname === '') {
            isError = true;
            errors.lastnameError = 'Please fill out last name';
        }
        if (this.state.username === '') {
            isError = true;
            errors.usernameError = 'Please fill out username';
        }
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

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);

        const err = this.validate(); //calling validate-func
        if (!err) {
            this.printForm(); //call printForm if no errors in the form

            this.setState({ //clear form
                firstname: '',
                firstnameError: '',
                lastname: '',
                lastnameError: '',
                username: '',
                usernameError: '',
                email: '',
                emailError: '',
                password: '',
                passwordError: ''
            })
        }
    }

    printForm = () => {

        this.setState({
            printName: this.state.firstname + ' ' + this.state.lastname,
            printUsername: this.state.username,
            printEmail: this.state.email,
            printPassword: this.state.password,
            formPrintClass: 'formPrint show'
        })
    }

    clearPrint = () => {
        this.setState({
            formPrintClass: 'formPrint',
        })
    }
    render() {

        return (
            <div className="row justify-content-between" >
                <div className="col-12 col-md-6">
                    <div className="form-section">
                        <header>
                            <header>
                                <HeaderText componentName="form" />

                            </header>
                        </header>
                        <form className="form-validation" action="">
                            <input name='firstname' type="text"
                                placeholder='First name'
                                value={this.state.firstname}
                                onChange={e => this.handleChange(e)}
                                onClick={this.clearPrint} />
                            <span className="warn">{this.state.firstnameError}</span>

                            <input name='lastname' type="text"
                                placeholder='Last name'
                                value={this.state.lastname}
                                onChange={e => this.handleChange(e)} />
                            <span className="warn">{this.state.lastnameError}</span>

                            <input name='username' type="text"
                                placeholder='Username'
                                value={this.state.username}
                                onChange={e => this.handleChange(e)} />
                            <span className="warn">{this.state.usernameError}</span>

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

                            <SubmitBtn clickProp={this.handleSubmit}>Submit</SubmitBtn>

                        </form>

                        <PrintForm classProp={this.state.formPrintClass} nameProp={this.state.printName}
                            userProp={this.state.printUsername}
                            emailProp={this.state.printEmail}
                            passProp={this.state.printPassword} />
                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="form" />
                </div>

            </div>
        );
    }
}

export default Form