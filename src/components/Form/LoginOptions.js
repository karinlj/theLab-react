import React from 'react';
import './Form.scss';
import AccountData from '../../data/accounts.json';

const LoginOptions = props => {

    // console.log(AccountData['lion@thelab.com']);
    // console.log(AccountData);   //alla username

    return (
        <div>
            <div className="login-options">
                <div className="login-option">
                    <h5>Role</h5>
                    <h5>Username</h5>
                    <h5>Password</h5>
                </div>

                {/* <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}

                {/*  Object.keys plockar ut keys ur objektet och stoppar in dem i array så vi kan använda map()*/}

                {Object.keys(AccountData).map((item, index) => {
                    return (
                        <div key={index} className="login-option">
                            <p key={AccountData[item].role}>{AccountData[item].role}</p>
                            <p key={item}>{item}</p>
                            <p key={AccountData[item].password}>{AccountData[item].password}</p>
                        </div>
                    )
                })}

                {/*  return <>  </>  same as () with multiple lines*/}

            </div>
        </div>
    );

}
export default LoginOptions