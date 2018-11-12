import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class Scramble extends Component { //class based
    state = {
        class: 'btn turquoise',
        id: 'big',
        content: 'elephant',
        message: '',
        messageClass: 'message',
    };


    scrambleId = () => {
        // alert('id');
        let ids = ['big', 'small', 'bigger'];

        //floor avrundar neråt, rand()=> 0-1, *längden av array 
        let randId = ids[Math.floor(Math.random() * ids.length)];

        console.log(randId);

        this.setState({
            id: randId,
            messageClass: 'message'
        })
    }

    scrambleClass = () => {
        let classes = ['btn pink', 'btn turquoise', 'btn yellow'];

        let randClass = classes[Math.floor(Math.random() * classes.length)];

        this.setState({
            class: randClass,
            messageClass: 'message'
        })

    }

    scrambleContent = () => {
        // alert('content');

        let contents = ['elephant', 'lion', 'zebra'];

        let randContent = contents[Math.floor(Math.random() * contents.length)];

        this.setState({
            content: randContent,
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
                                <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare()} />

                                <div className="scrambleText">
                                    {/*  <div className={this.state.messageClass}> */}

                                    <p>Current button <strong>id</strong> is: <strong>{this.state.id}</strong></p>

                                    <p>Current button <strong>class</strong> is: <br /> <strong>{this.state.class}</strong></p>

                                </div>

                                <div className="scramble-btns">

                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Id" clickProp={this.scrambleId} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Class" clickProp={this.scrambleClass} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Content" clickProp={this.scrambleContent} />
                                </div>
                            </div>

                            <div className="col-4">
                                <MainBtn idProp="big" classProp="btn turquoise" titleProp="elephant" clickProp={() => this.compare()} />

                                {/* <h4>{this.state.message}</h4> */}
                                <h4 className="message">Success!</h4>

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
