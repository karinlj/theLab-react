import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import SubmitBtn from '../SubmitBtn';
import './Strings.scss';
import HeaderData from '../../data/headerData.json';

class ConcatStrings extends Component { //class based
    state = {
        string1: '',
        string2: '',
        concatStr: '',
        inputStr: '',
        message: '',
        messageClass: 'message',
    };

    generateStrings = () => {
        let strings = ['bear', 'elefant', 'bunny', 'horse', 'cow', 'tiger', 'lion', 'mouse', 'bird', 'turtle'];

        let randStr1 = strings[Math.floor(Math.random() * strings.length)];
        let randStr2 = strings[Math.floor(Math.random() * strings.length)];

        let doubleRandStr = randStr1 + randStr2;

        this.setState({
            string1: randStr1,
            string2: randStr2,
            concatStr: doubleRandStr
        })
        //console.log(this.state.concatStr);
    }

    handleChange = (e) => {
        this.setState({
            inputStr: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.inputStr);

        let messageNew = '';
        if (this.state.inputStr === this.state.concatStr) {
            messageNew = 'Success!';
        }
        else
            messageNew = 'Fail!';

        this.setState({ //reset inputStr, set value={this.state.inputStr} to empty input
            inputStr: '',
            message: messageNew,
            messageClass: 'message show',
        });
    }

    render() {
        const pageHeading = HeaderData.concatStr.heading;
        const pageText = HeaderData.concatStr.text;

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="concatStrings-section">
                        <header>
                            <h1>{pageHeading}</h1>
                            <p>{pageText}</p>
                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" titleProp="Generate strings" clickProp={this.generateStrings} />
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        <h5 className="strings">{this.state.string1} <br />
                            {this.state.string2}</h5> {/* output the two strings */}


                        <form className="todo-form" onSubmit={this.handleSubmit}>

                            <label htmlFor="">Type the two strings together:</label><br></br>

                            <input type="text" onChange={this.handleChange} value={this.state.inputStr} />
                        </form>

                        <SubmitBtn titleProp="Submit" clickProp={this.handleSubmit} />

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why Learn: Concat strings?" text="Very often in test automation we need to be able to use the data that the application outputs in a later test step. A good example of this is when doing assetions based on computer-generatd id:s or time or date strings. " />

                </div>
            </div>
        )
    }
}
export default ConcatStrings