import React, { Component } from 'react';
import './Form.scss';
import SubmitBtn from '../SubmitBtn';
import HeaderText from '../HeaderText';
import AccountData from '../../data/accounts.json';

class LoginForm extends Component {
    state = {
        role: '',
        email: '',
        password: '',
        errorText: '',
        loggedInText: '',
        formClass: 'form show',
        loggedinClass: 'loggedin'
    }

    handleChange = (e) => {     //in loginView?
        this.setState({ //value= what user types in
            [e.target.name]: e.target.value
        })
    };

    validate = () => {
    }

    handleLogin = (e) => {
        e.preventDefault();

        let username = this.state.email;
        let newRole = AccountData[username].role;

        //console.log(AccountData[username]);
        //console.log('pass ' + AccountData[username].password);

        if (AccountData[username].password === this.state.password) {
            this.setState({
                role: newRole,
                formClass: 'form',
                loggedinClass: 'loggedin show',
                loggedInText: this.state.email
            })
        }
        else {
            this.setState({
                errorText: 'Password is incorrect'
            })
        }
    }


    render() {

        return (

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

                    <input name='password' type="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={e => this.handleChange(e)} />
                    <span className="warn">{this.state.errorText}</span>

                    <SubmitBtn clickProp={this.handleLogin}>Log in</SubmitBtn>

                </form>
            </div>

        );
    }
}

export default LoginForm