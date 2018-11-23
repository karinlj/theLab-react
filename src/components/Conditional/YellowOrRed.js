import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Conditional.scss';
import HeaderText from '../HeaderText';
import Message from '../Message';

class YellowOrRed extends Component {
    state = {
        color: '',
        message: '',
    };

    //Arrow func to manually bind 'this' to the func in reaction to DOM events, so we can use 'this'.
    generateColor = () => {
        let colors = ['yellow', 'red'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randColor = colors[Math.floor(Math.random() * colors.length)];

        this.setState({
            color: randColor,
            message: ''
        })
    }

    compare = (compareValue) => {

        let messageNew = '';
        let { color } = this.state; //color=this.state.color

        messageNew = (compareValue === color ? 'Success!' : 'Fail!');

        this.setState({
            message: messageNew,
        })
    }

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="colors-section">
                        <header>
                            <HeaderText componentName="yellowOrRed" />

                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" clickProp={this.generateColor}>Generate color</MainBtn>

                            <Message>{this.state.message}</Message>
                        </div>

                        <h3 className="rand-color">{this.state.color}</h3>

                        <MainBtn classProp="button yellow-btn" clickProp={() => this.compare('yellow')}>Yellow</MainBtn>

                        <MainBtn classProp="button red-btn" clickProp={() => this.compare('red')}>Red</MainBtn>

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="yellowOrRed" />

                </div>
            </div>
        )
    }
}
export default YellowOrRed
