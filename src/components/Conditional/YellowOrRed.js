import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Conditional.scss';
import HeaderData from '../../data/headerData.json';
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
                            <HeaderText itemProp={HeaderData.YellowOrRed} />

                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" titleProp="Generate color" clickProp={this.generateColor} />
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        <h3 className="rand-color">{this.state.color}</h3>

                        <MainBtn classProp="button yellow-btn" titleProp="Yellow" clickProp={() => this.compare('yellow')} />

                        <MainBtn classProp="button red-btn" titleProp="Red" clickProp={() => this.compare('red')} />

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why Learn: Yellow or Red?" text="In this case we look at basic condition handling. If something exists do this, otherwise do that. This is the fundament on doing tests on top of a system where the intial state isn't known, or a future state cannot be predicted. By using logic like this, we can allow our tests to adapt to how the application behaves." />

                </div>
            </div>
        )
    }
}
export default YellowOrRed
