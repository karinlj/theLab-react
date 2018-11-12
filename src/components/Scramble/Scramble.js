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



                        <div className="row justify-content-between">
                            <div className="col-8">
                                <MainBtn classProp="button pink-btn" titleProp="elephant" clickProp={() => this.compare()} />

                                <div className="messageText">
                                    {/*  <div className={this.state.messageClass}> */}

                                    <p>Current button <strong>id </strong>is:</p>

                                    <p>Current button <strong>class </strong> is:</p>

                                    <h4>{this.state.message}</h4>
                                </div>

                                <div className="scramble-btns">

                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Id" clickProp={this.generateColor} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Class" clickProp={this.generateColor} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Content" clickProp={this.generateColor} />
                                </div>
                            </div>

                            <div className="col-4">
                                <MainBtn classProp="button turquoise-btn" titleProp="elephant" clickProp={() => this.compare()} />

                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="scramble" />
                </div>
            </div >
        )
    }
}
export default Scramble
