import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import Cat from '../../img/cat.jpg';
import Dog from '../../img/dog.jpg';
import './Conditional.scss';
import HeaderText from '../HeaderText';
import Message from '../Message';

class CatOrDog extends Component { //class based
    state = {
        pet: 'cat',
        message: ''
    };

    generatePet = () => {
        let pets = ['cat', 'dog'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randPet = pets[Math.floor(Math.random() * pets.length)];

        this.setState({
            pet: randPet,
            message: ''
        })
    }

    compare = (compareValue) => {

        let messageNew = '';
        let { pet } = this.state; //pet=this.state.pet

        messageNew = (compareValue === pet ? 'Success!' : 'Fail!');

        this.setState({
            message: messageNew
        })
    }

    render() {

        let { pet } = this.state;
        let displayPet;
        const catImg = <img src={Cat} alt="" />;
        const dogImg = <img src={Dog} alt="" />;

        displayPet = (pet === 'cat' ? catImg : dogImg); //displayPet will show cat, otherwise dog 

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="colors-section">
                        <header>
                            <HeaderText componentName="catOrDog" />
                        </header>

                        <div className="btn-and-message">
                            <MainBtn classProp="button orange-btn" clickProp={this.generatePet}>Generate pet</MainBtn>

                            <Message>{this.state.message}</Message>
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
