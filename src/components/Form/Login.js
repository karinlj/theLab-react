import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
import HeaderText from '../HeaderText';

class Login extends Component { //class based component
    state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        errors: [],
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

        this.setState({
            errors: errors
        });
        return isError;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        const err = this.validate(); //calling validate-func
        if (!err) {
            this.setState({ //clear form
                email: '',
                emailError: '',
                password: '',
                passwordError: ''
            })
        }
    }

    render() {

        return (
            <div className="row justify-content-between" >
                <div className="col-12 col-md-6">
                    <div className="form-section">
                        <header>
                            <header>
                                <HeaderText componentName="login" />

                            </header>
                        </header>
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

                            <SubmitBtn clickProp={this.handleSubmit}>Submit</SubmitBtn>

                        </form>
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