import React from 'react';

const Message = props => {

    //console.log(props);

    const { children } = props; //this.state.message from parent component

    let messageClasses = 'message ';
    messageClasses += (children === '' ? '' : 'show');
    //if message is not populated in parent comp,  no extra class, otherwise +show-class

    return (
        <div className={messageClasses}>
            <h4>{children}</h4>
        </div>
    );
};

export default Message

