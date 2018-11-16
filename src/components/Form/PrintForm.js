import React from 'react';

//functional/stateless component accepting prop
const PrintForm = props => {

    //console.log(props);

    return (
        <div className={props.classProp}>
            <div className="card">
                <div className="card-body">
                    <ul>
                        <li><strong>Name:</strong> {props.nameProp} </li>
                        <li><strong>Username:</strong> {props.userProp} </li>
                        <li><strong>Email:</strong> {props.emailProp} </li>
                        <li><strong>Password:</strong> {props.passProp}</li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default PrintForm