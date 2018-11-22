import React, { Component } from 'react';
import TestChildOne from './TestChildOne';

class Test extends Component {
    state = {
    }



    handleDataCallback = (helloMess) => {  //being called in childComp via prop in TestForm
        console.log(this);
        alert(helloMess);  //alert something
    }

    render() {

        return (
            <div>
                <h1>Test</h1>

                <TestChildOne dataCallback={this.handleDataCallback} />

            </div>
        );
    }
}
export default Test