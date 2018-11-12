import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class Scramble extends Component { //class based
    state = {
        message: '',
        messageClass: 'message',
    };

    generateColor = () => {
        let colors = ['yellow', 'red'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randColor = colors[Math.floor(Math.random() * colors.length)];

        this.setState({
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
                    <div className="scramble-section">
                        <header>
                            <HeaderText componentName="scramble" />
                        </header>

                        <div className="btn-and-message">
                            <MainBtn classProp="button orange-btn" titleProp="Scramble Id" clickProp={this.generateColor} />
                            <MainBtn classProp="button orange-btn" titleProp="Scramble Class" clickProp={this.generateColor} />
                            <MainBtn classProp="button orange-btn" titleProp="Scramble Content" clickProp={this.generateColor} />

                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        The current button class is:

                        The current button id is:

                        <MainBtn classProp="button yellow-btn" titleProp="xxx" clickProp={() => this.compare()} />

                        <MainBtn classProp="button red-btn" titleProp="xxx" clickProp={() => this.compare()} />

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="scramble" />
                </div>
            </div>
        )
    }
}
export default Scramble
