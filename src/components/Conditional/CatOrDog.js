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
        } else if (this.state.pet === 'dog') {
            animal = <img src={Dog} alt="a dog" />
        }

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="rightBtn-section">
                        <header>
                            <h1 className="">Cat or Dog</h1>
                            <p>Click the Generate pet button to display an image and then click the button with the correspondent pet.</p>
                        </header>

                        {/* <h5 className="rand-color-text">Click the button with the generated pet:</h5> */}

                        <div className="btn-and-message">
                            <ConditionalBtn class="button generate-btn" title="Generate pet" click={this.generatePet} />
                            <div className="error-message">{this.state.errorMessage}</div>
                        </div>

                        <div className="pet-img-wrapper">
                            {animal}
                        </div>

                        <ConditionalBtn class="button yellow-btn" title="Cat" click={() => this.compare('cat')} />

                        <ConditionalBtn class="button red-btn" title="Dog" click={() => this.compare('dog')} />


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
