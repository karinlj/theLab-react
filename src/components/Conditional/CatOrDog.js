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

    generatePet = () => {
        let pets = ['cat', 'dog'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randPet = pets[Math.floor(Math.random() * pets.length)];

        this.setState({
            pet: randPet,
            errorMessage: ''
        })
    }

    compare = (compareValue) => {

        let errMessage = '';
        if (compareValue === this.state.pet) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }

    render() {
        var animal;
        if (this.state.pet === 'cat') {
            animal = <img src={Cat} alt="a cat" />
        } else {
            animal = <img src={Dog} alt="a dog" />
        }

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

                        {animal}

                        <ConditionalBtn class="button yellow-btn" title="Cat" click={() => this.compare('cat')} />

                        <ConditionalBtn class="button red-btn" title="Dog" click={() => this.compare('dog')} />

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
