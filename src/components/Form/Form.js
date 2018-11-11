import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
//import HeaderData from '../../data/headerData.json';
import HeaderText from '../HeaderText';

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
        passwordError: ''
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
            // alert('Username needs to be al least 5 characters');
        }


        this.setState({
            ...this.state, //state is staying the same
            ...errors  //expanding errors
        });
        return isError;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const err = this.validate(); //calling validate-func
        if (!err) {
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
                            {/*  <input type="text" placeholder='First name'
                                    value={this.state.firstname}
                                    onChange={e => this.setState({ firstname: e.target.value })} /> */}

                            <input name='firstname' type="text"
                                placeholder='First name'
                                value={this.state.firstname}
                                onChange={e => this.handleChange(e)} />
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

                            <SubmitBtn titleProp="Submit"
                                clickProp={this.handleSubmit} />

                        </form>

                        {/* onClick={e => this.handleSubmit(e)}>Submit</button> */}
                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why learn: Form validation?" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />
                </div>

            </div>
        );
    }
}

export default Form