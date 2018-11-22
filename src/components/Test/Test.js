import React, { Component } from 'react';
import TestChildOne from './TestChildOne';
import MainBtn from '../MainBtn';

class Test extends Component {
    state = {
        showBtnMessage: false,
    }

    handleDataCallback = (helloMess) => {  //being called in childComp via prop in TestForm
        console.log(this);
        alert(helloMess);  //alert something
    }

    handleClick = () => {
        this.setState({
            showBtnMessage: !this.state.showBtnMessage
        })
    }

    render() {

        const { showBtnMessage } = this.state       // =const showBtnMessage =  this.state.showBtnMessage

        return (
            <div>
                <h1>Test</h1>

                <TestChildOne dataCallback={this.handleDataCallback} />

                <MainBtn classProp="button pink-btn" clickProp={this.handleClick}>Toggle content</MainBtn>

                {/* if showMessage is true, display message, otherwise nothing */}
                {showBtnMessage === true ? <p>I can toggle content...</p> : ''}


            </div>
        );
    }
}
export default Test