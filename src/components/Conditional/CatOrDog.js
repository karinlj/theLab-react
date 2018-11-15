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
                            <MainBtn classProp="button orange-btn" clickProp={this.generatePet}>Generate pet</MainBtn>
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        <div className="pet-img-wrapper">
                            {displayPet}
                        </div>

                        <MainBtn classProp="button turquoise-btn" clickProp={() => this.compare('cat')} >Cat</MainBtn>

                        <MainBtn classProp="button pink-btn" clickProp={() => this.compare('dog')} >Dog</MainBtn>

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="catOrDog" />

                </div>
            </div>
        )
    }
}
export default CatOrDog
