import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';
import Message from '../Message';

class Scramble extends Component { //class based
    state = {
        class: 'btn pink',
        id: 'big',
        indexId: 0, //for counting up 
        indexClass: 0,
        indexContent: 0,
        content: 'lion',
        isReversed: false,
        message: ''
    };

    scrambleId = () => {

        let ids = ['big', 'bigger', 'small'];
        let i = this.state.indexId;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }

        let scrambleId = ids[i];

        //console.log(scrambleId);

        /*  The modulus way:
            i++;
           let scrambleId = ids[i % ids.length];    //heltalsresten av 0 = 0,   3 % 3 = 0
   
           console.log(i);
           console.log(scrambleId); */

        this.setState({
            id: scrambleId,
            indexId: i,
            message: ''
        })
    }

    scrambleClass = () => {
        let classes = ['btn pink', 'btn dark-blue', 'btn yellow'];
        let i = this.state.indexClass;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }

        let scrambleClass = classes[i];

        //console.log(scrambleClass);

        this.setState({
            class: scrambleClass,
            indexClass: i,
            message: ''
        })
    }

    scrambleContent = () => {

        let contents = ['lion', 'puma', 'tiger'];
        let i = this.state.indexContent;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }

        let scrambleContent = contents[i];

        //console.log(scrambleContent);

        this.setState({
            indexContent: i,
            content: scrambleContent,
            message: ''
        })
    }

    renderBtns = (isLeftPosition) => {  //isLeftPosition: true eller false i två rader på en lapp. om isReversed i kolumner som tabell. fyller i i tabellen var ska knappen vara. Hälften ska vara till höger och tvärtom.
        //false + false = false
        //false + true = true
        //true + false = true
        //true + true = false

        //if (isLeft) {  //only to output the buttons
        if ((isLeftPosition && !this.state.isReversed) || (!isLeftPosition && this.state.isReversed)) {  //to move the buttons
            return (
                <MainBtn idProp={this.state.id} classProp={this.state.class}
                    clickProp={() => this.compare(true)}>{this.state.content}</MainBtn>
            );
        }
        else {
            return (
                <MainBtn idProp="normal" classProp="button green-btn" clickProp={() => this.compare(false)}>elephant</MainBtn>
            );
        }
    }

    scrambleOrder = () => {
        this.setState({
            isReversed: !this.state.isReversed,
            message: ''
        })
    }

    compare = (isSuccess) => {

        let messageNew = '';
        if (isSuccess) {  //if isSuccess is true
            messageNew = 'Success!';
        }
        else {
            messageNew = 'Fail!';
        }

        this.setState({
            message: messageNew
        })
    }

    render() {

        const scrambleBtnClass = 'button orange-btn';

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="scramble-section">
                        <header>
                            <HeaderText componentName="scramble" />
                        </header>

                        <div className="animalBtns">
                            <div className="row justify-content-between">

                                <div className="col">
                                    {this.renderBtns(true)}
                                </div>

                                <div className="col">
                                    {this.renderBtns(false)}
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">

                            <div className="col">
                                <div className="scrambleText">
                                    <p>Current button <strong>id</strong> is: <strong>{this.state.id}</strong></p>

                                    <p>Current button <strong>class</strong> is: <strong>{this.state.class}</strong></p>
                                </div>
                            </div>
                            <div className="col">
                                <Message>{this.state.message}</Message>

                            </div>
                        </div>

                        <div className="scrambleBtns">
                            <div className="row justify-content-between">

                                <div className="col-sm-6 col-md-12 col-xl-6">
                                    <MainBtn classProp={scrambleBtnClass} clickProp={this.scrambleId}>Scramble Id</MainBtn>
                                </div>
                                <div className="col-sm-6 col-md-12 col-xl-6">
                                    <MainBtn classProp={scrambleBtnClass} clickProp={this.scrambleContent}>Scramble Content</MainBtn>

                                </div>
                            </div>

                            <div className="row justify-content-between">

                                <div className="col-sm-6 col-md-12 col-xl-6">
                                    <MainBtn classProp={scrambleBtnClass} clickProp={this.scrambleClass}>Scramble Class</MainBtn>
                                </div>
                                <div className="col-sm-6 col-md-12 col-xl-6">
                                    <MainBtn classProp={scrambleBtnClass} clickProp={this.scrambleOrder}>Scramble Order</MainBtn>

                                </div>
                            </div>
                        </div>

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
