import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import GenerateBtn from './GenerateBtn';
import RedBtn from './RedBtn';
import YellowBtn from './YellowBtn';

class ClickCorrectBtn extends Component { //class based
    state = {
        color: '',
        errorMessage: ''
    };

    //Arrow func to manually bind 'this' to the func in reaction to DOM events,
    //so that we can use 'this'.
    //Arrow func bind the value of 'this' to whatever 'this' is outside the func.
    //In the render method (in the template), React does it for us

    generateColor = () => {
        let colors = ['yellow', 'red'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randColor = colors[Math.floor(Math.random() * colors.length)];

        this.setState({
            color: randColor,
            errorMessage: ''
        })
    }

    compareYellow = () => {
        const colorYellow = 'yellow';
        let errMessage = '';
        if (colorYellow === this.state.color) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }
    compareRed = () => {
        const colorRed = 'red';
        let errMessage = '';
        if (colorRed === this.state.color) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }

    render() {
        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="rightBtn-section">
                        <header>
                            <h1 className="">Click the correct button</h1>
                            <p>On page reload randomly show “Click Green button” or “Click Red button”.</p>
                            <p>Display two buttons, one with the text “Red” and color red, and the other with the color green and text “Green”.</p>
                            <p>If the wrong button is pressed, display “Fail”. If the correct button is pressed, display “Success”.</p>
                        </header>

                        <h5 className="rand-color-text">Click the button with the generated color:</h5>

                        <GenerateBtn title="Bananer" didrik="button generate-btn" click={this.generateColor} />

                        <h3 className="rand-color">{this.state.color}</h3>

                        <YellowBtn click={this.compareYellow} />
                        <RedBtn click={this.compareRed} />

                        <div className="error-message">{this.state.errorMessage}</div>

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello CorrectBtn" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>
            </div>
        )
    }
}
export default ClickCorrectBtn
