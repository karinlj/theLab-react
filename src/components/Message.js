import React, { Component } from 'react'

class Message extends Component {
    //console.log(props);


    render() {
        const { children } = this.props; //text between tags

        let messageClasses = 'message '

        messageClasses += (children === '' ? '' : 'show');
        //if message is not populated in parent comp,  no extra class, otherwise +show-class

        return (
            <div className={messageClasses}>

                <h4>{children}</h4>
            </div>
        );
    }
};

export default Message

