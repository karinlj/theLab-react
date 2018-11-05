import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import Cat from '../../img/cat.jpg';
import Dog from '../../img/dog.jpg';
import './Conditional.scss';

class CatOrDog extends Component { //class based
    state = {
        pet: 'cat',
        errorMessage: ''
    };

    generatePet = () => {
        let pets = ['cat', 'dog'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randPet = pets[Math.floor(Math.random() * pets.length)];

        this.setState({
            pet: randPet
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
        var displayPet;
        if (this.state.pet === 'cat') {
            displayPet = <img src={Cat} alt="a cat" />
        } else if (this.state.pet === 'dog') {
            displayPet = <img src={Dog} alt="a dog" />
        }

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="colors-section">
                        <header>
                            <h1 className="">Cat or Dog</h1>
                            <p>Click the Generate pet button to display an image and then click the button with the correspondent pet.</p>
                        </header>

                        {/* <h5 className="rand-color-text">Click the button with the generated pet:</h5> */}

                        <div className="btn-and-message">
                            <MainBtn classProp="button orange-btn" titleProp="Generate pet" clickProp={this.generatePet} />
                            <div className="error-message">{this.state.errorMessage}</div>
                        </div>

                        <div className="pet-img-wrapper">
                            {displayPet}
                        </div>

                        <MainBtn classProp="button turquoise-btn" titleProp="Cat" clickProp={() => this.compare('cat')} />

                        <MainBtn classProp="button pink-btn" titleProp="Dog" clickProp={() => this.compare('dog')} />

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Why Learn: Cat or Dog?" text="Often it's preferred to make all assertions on deterministic things, such as existance of elements or simple Boolean expression. There are times in test automation where we need to base our logic on an image. This can be especially useful when asserting the state of a graphical toggle-button, where other information is not available." />

                </div>
            </div>
        )
    }
}
export default CatOrDog
