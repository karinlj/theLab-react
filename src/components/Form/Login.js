import React, { Component } from 'react';
import './Form.scss';
import Sidebar from '../Sidebar';
import SubmitBtn from '../SubmitBtn';
import MainBtn from '../MainBtn';
import HeaderText from '../HeaderText';
import Lion from '../../img/lion.jpeg';
import Zebra from '../../img/zebra.jpeg';
import Lemur from '../../img/lemur.jpg';
import AccountData from '../../data/accounts.json';
//import TestForm from './TestForm';

class Login extends Component {
    state = {
        role: '',
        email: '',
        password: '',
        errorText: '',
        loggedInText: '',
        formClass: 'form show',
        loggedinClass: 'loggedin',
        showBtnMessage: false
    }

    handleChange = (e) => {
        this.setState({ //value= what user types in
            [e.target.name]: e.target.value
        })
    };

    handleLogin = (e) => {
        e.preventDefault();
        let username = this.state.email;

        //console.log(AccountData[username]);
        //console.log('pass ' + AccountData[username].password);

        if (AccountData[username] && AccountData[username].password === this.state.password) {
            let newRole = AccountData[username].role;

            this.setState({
                role: newRole,
                formClass: 'form',
                loggedinClass: 'loggedin show',
                loggedInText: this.state.email
            })
        }
        else {
            this.setState({
                errorText: 'Username or Password is incorrect'
            })
        }
    }

    displayPictAndBtns = () => {
        let displayAnimal;
        let displayBtns;

        if (this.state.role === 'lion') {
            displayAnimal = <img src={Lion} alt="" />;
            displayBtns =
                <div className="btns">
                    <MainBtn classProp="button turquoise-btn" clickProp={this.handleClick}>one</MainBtn>
                    <MainBtn classProp="button green-btn" clickProp={this.handleClick}>two</MainBtn>
                    <MainBtn classProp="button pink-btn" clickProp={this.handleClick}>three</MainBtn>
                </div>;

        } else if (this.state.role === 'zebra') {
            displayAnimal = <img src={Zebra} alt="" />;
            displayBtns =
                <div className="btns">
                    <MainBtn classProp="button turquoise-btn" clickProp={this.handleClick}>one</MainBtn>
                    <MainBtn classProp="button green-btn" clickProp={this.handleClick}>two</MainBtn>
                </div>;
        }
        else if (this.state.role === 'lemur') {
            displayAnimal = <img src={Lemur} alt="" />;
            displayBtns =
                <div className="btns">
                    <MainBtn classProp="button turquoise-btn" clickProp={this.handleClick}>one</MainBtn>
                </div>;
        }
        return { animal: displayAnimal, btns: displayBtns };  //returning object
    }


    handleLogout = () => {
        this.setState({  //clear form
            email: '',
            password: '',
            errorText: '',
            formClass: 'form show',
            loggedinClass: 'loggedin'
        })
    }

    handleClick = (e) => {
        //alert('click');
        this.setState({
            showBtnMessage: !this.state.showBtnMessage
        })
    }

    /*   handleDataCallback = (helloMess) => {  //being called in childComp via prop in TestForm
          console.log(this);
          alert(helloMess);  //alert something
      } */

    render() {
        // returned object of values from displayPictAndBtns-func put in variable 
        let displayThings = this.displayPictAndBtns();
        const { showBtnMessage } = this.state       // =const showBtnMessage =  this.state.showBtnMessage


        // console.log(AccountData['lion@thelab.com']);
        console.log(AccountData);   //alla username

        let x;
        for (x in AccountData) {
            console.log(AccountData[x].role);
            console.log(AccountData[x].password);
        }

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="login-section">

                        {/* For testing only  <TestForm dataCallback={this.handleDataCallback} />  */}

                        <header>
                            <HeaderText componentName="login" />
                        </header>

                        {/* loginView  */}
                        <div className={this.state.formClass}>
                            <div className="login-options">
                                <div className="login-option">
                                    <h5>Role</h5>
                                    <h5>Username</h5>
                                    <h5>Password</h5>
                                </div>
                                <div className="login-option">  {/* loop för varje option? */}
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

                        {/* logoutView */}
                        <div className={this.state.loggedinClass}>
                            <div className="loginBar">

                                <div>
                                    <p>Logged in as:</p>
                                    <div className="user">
                                        {/* returned value from displayPictAndBtns-func */}
                                        {displayThings.animal}

                                        <h5>{this.state.loggedInText}</h5>
                                    </div>
                                </div>

                                <MainBtn classProp="button red-btn" clickProp={this.handleLogout}>Log out</MainBtn>
                            </div>
                            <div className="permissions">
                                <p>Since I am the <strong>{this.state.role}</strong>, I have access to these buttons:</p>

                                {/* returned value from displayPictAndBtns-func */}
                                {displayThings.btns}
                            </div>
                            {/* if showMessage is true, display message, otherwise nothing */}
                            {showBtnMessage === true ? <p>I can do this...</p> : ''}
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