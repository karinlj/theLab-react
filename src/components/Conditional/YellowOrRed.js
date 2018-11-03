import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import ConditionalBtn from './ConditionalBtn';

class YellowOrRed extends Component { //class based
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

    compare = (compareValue) => {

        let errMessage = '';
        if (compareValue === this.state.color) {
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
                            <h1 className="">Yellow or Red</h1>
                            <p>Click the Generate color button to display a word and then click the button with the correspondent color.</p>

                        </header>

                        <ConditionalBtn class="button generate-btn" title="Generate color" click={this.generateColor} />

                        <h3 className="rand-color">{this.state.color}</h3>

                        <div className="error-message">{this.state.errorMessage}</div>

                        <ConditionalBtn class="button yellow-btn" title="Yellow" click={() => this.compare('yellow')} />

                        <ConditionalBtn class="button red-btn" title="Red" click={() => this.compare('red')} />

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello YellowOrRed" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>
            </div>
        )
    }
}
export default YellowOrRed
