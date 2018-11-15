import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Conditional.scss';
import HeaderText from '../HeaderText';


class YellowOrRed extends Component { //class based
    state = {
        color: '',
        message: '',
        messageClass: 'message',
    };

    //Arrow func to manually bind 'this' to the func in reaction to DOM events,
    //so that we can use 'this'.
    generateColor = () => {
        let colors = ['yellow', 'red'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randColor = colors[Math.floor(Math.random() * colors.length)];

        this.setState({ //only change the state inside the setState method
            color: randColor,
            messageClass: 'message'
        })
    }

    compare = (compareValue) => {

        let messageNew = '';
        if (compareValue === this.state.color) {
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
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
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
