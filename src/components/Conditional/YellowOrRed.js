import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Conditional.scss';

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

        this.setState({ //only change the state inside the setState method
            color: randColor
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
                    <div className="colors-section">
                        <header>
                            <h1 className="">Yellow or Red</h1>
                            <p>Click the Generate color button to display a word and then click the button with the correspondent color.</p>
                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" titleProp="Generate color" clickProp={this.generateColor} />
                            <div className="error-message">{this.state.errorMessage}</div>
                        </div>

                        <h3 className="rand-color">{this.state.color}</h3>

                        <MainBtn classProp="button yellow-btn" titleProp="Yellow" clickProp={() => this.compare('yellow')} />

                        <MainBtn classProp="button red-btn" titleProp="Red" clickProp={() => this.compare('red')} />

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Why Learn: Yellow or Red?" text="In this case we look at basic condition handling. If something exists do this, otherwise do that. This is the fundament on doing tests on top of a system where the intial state isn't known, or a future state cannot be predicted. By using logic like this, we can allow our tests to adapt to how the application behaves." />

                </div>
            </div>
        )
    }
}
export default YellowOrRed
