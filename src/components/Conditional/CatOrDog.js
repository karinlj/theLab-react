import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import ConditionalBtn from './ConditionalBtn';
import Cat from '../../img/cat.jpg';
import Dog from '../../img/dog.jpg';

class CatOrDog extends Component { //class based
    state = {
        pet: '',
        errorMessage: ''
    };

    //Arrow func to manually bind 'this' to the func in reaction to DOM events,
    //so that we can use 'this'.
    //Arrow func bind the value of 'this' to whatever 'this' is outside the func.
    //In the render method (in the template), React does it for us

    generatePet = () => {
        let pets = ['cat', 'dog'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randPet = pets[Math.floor(Math.random() * pets.length)];

        this.setState({
            pet: randPet,
            errorMessage: ''
        })
    }
    compareCat = () => {
        const petCat = 'cat';
        let errMessage = '';
        if (petCat === this.state.pet) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }
    compareDog = () => {
        const petDog = 'dog';
        let errMessage = '';
        if (petDog === this.state.pet) {
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
                            <h1 className="">Cat or Dog</h1>
                            <p>On page reload randomly show “Click Green button” or “Click Red button”.</p>
                            <p>Display two buttons, one with the text “Red” and color red, and the other with the color green and text “Green”.</p>
                            <p>If the wrong button is pressed, display “Fail”. If the correct button is pressed, display “Success”.</p>
                        </header>

                        <h5 className="rand-color-text">Click the button with the generated color:</h5>

                        <ConditionalBtn class="button generate-btn" title="Generate pet" click={this.generatePet} />

                        <h3 className="rand-color">{this.state.pet}</h3>


                        <img src={Cat} alt="a cat" />

                        <img src={Dog} alt="a dog" />


                        <ConditionalBtn class="button yellow-btn" title="Cat" click={this.compareCat} />

                        <ConditionalBtn class="button red-btn" title="Dog" click={this.compareDog} />

                        <div className="error-message">{this.state.errorMessage}</div>

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello CatOrDog" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>
            </div>
        )
    }
}
export default CatOrDog
