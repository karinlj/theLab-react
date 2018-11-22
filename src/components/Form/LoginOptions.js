import React, { Component } from 'react';
import './Form.scss';
import AccountData from '../../data/accounts.json';


class LoginOptions extends Component {
    state = {
    }


    createTable = () => {
        let user = '';
        let role = '';
        let pass = '';

        const myData = [];

        for (user in AccountData) {

            <div className="login-options">

                <div className="login-options">

                    <p>{AccountData[user].role}</p>

                    <p>{user}</p>

                    <p>{AccountData[user].password}</p>

                </div>
            </div>
        }
    }


    render() {

        // console.log(AccountData['lion@thelab.com']);
        // console.log(AccountData);   //alla username

        /*  let key;
         let innerKey;
 
         for (key in AccountData) {
             for (innerKey in AccountData[key]) {
                 return (
                     <ul>
                         <li>{AccountData[key][innerKey]}</li>
                         <li>{AccountData[key][innerKey]}</li>
                     </ul>
 
                 )
             }
         } */


        let accountItem;
        for (accountItem in AccountData) {
            console.log(accountItem);
            console.log(AccountData[accountItem].role);
            console.log(AccountData[accountItem].password);
        }


        /*      let x;
             let y;
             for (x in AccountData) {
                 console.log(x);
     
                 for (y in AccountData[x]) {
     
                     console.log(y);
                 }
             } */


        return (
            <div>
                <h2>LoginOptions</h2>


                {/*  {AccountData.map((item, index) => {
                    return <p>{item.role}</p>
                })} */}



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
            </div>
        );
    }
}
export default LoginOptions