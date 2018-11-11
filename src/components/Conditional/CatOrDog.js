import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import Cat from '../../img/cat.jpg';
import Dog from '../../img/dog.jpg';
import './Conditional.scss';
import HeaderText from '../HeaderText';

class CatOrDog extends Component { //class based
    state = {
        pet: 'cat',
        message: '',
        messageClass: 'message',
    };

    generatePet = () => {
        let pets = ['cat', 'dog'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randPet = pets[Math.floor(Math.random() * pets.length)];

        this.setState({
            pet: randPet,
            messageClass: 'message'
        })
    }

    compare = (compareValue) => {

        let messageNew = '';
        if (compareValue === this.state.pet) {
            messageNew = 'Success!';
        }
        else
            messageNew = 'Fail!';

        this.setState({
            message: messageNew,
            messageClass: 'message show',
        })
    }

    render() {

        var displayPet;
        if (this.state.pet === 'cat') {
            displayPet = <img src={Cat} alt="" />
        } else if (this.state.pet === 'dog') {
            displayPet = <img src={Dog} alt="" />
        }

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="colors-section">
                        <header>
                            <HeaderText componentName="catOrDog" />


                        </header>

                        <div className="btn-and-message">
                            <MainBtn classProp="button orange-btn" titleProp="Generate pet" clickProp={this.generatePet} />
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        <div className="pet-img-wrapper">
                            {displayPet}
                        </div>

                        <MainBtn classProp="button turquoise-btn" titleProp="Cat" clickProp={() => this.compare('cat')} />

                        <MainBtn classProp="button pink-btn" titleProp="Dog" clickProp={() => this.compare('dog')} />

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why Learn: Cat or Dog?"
                        text="Often it's preferred to make all assertions on existance of elements or simple Boolean expressions. There are times in test automation where we need to base our logic on an image. This can be especially useful when asserting the state of a graphical toggle-button, where the element and text content is the same, regardless of state." />

                </div>
            </div>
        )
    }
}
export default CatOrDog
