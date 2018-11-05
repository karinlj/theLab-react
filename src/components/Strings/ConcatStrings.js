import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import SubmitBtn from '../SubmitBtn';
import './Strings.scss';


class ConcatStrings extends Component { //class based
    state = {
        string1: '',
        string2: '',
        concatStr: '',
        inputStr: '',
        errorMessage: ''
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

        let errMessage = '';
        if (this.state.inputStr === this.state.concatStr) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })

        this.setState({ //reset inputStr, set value={this.state.inputStr} to empty input
            inputStr: ''
        });
    }

    /* compare = (compareValue) => {

         e.preventDefault();
        console.log(this.state.inputStr);

        let errMessage = '';
        if (compareValue === this.state.concatStr) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    } */

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="concatStrings-section">
                        <header>
                            <h1 className="">Concatenate strings</h1>
                            <p>Click the Generate string button to display two strings and then type in the strings together.</p>
                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" titleProp="Generate strings" clickProp={this.generateStrings} />
                            <div className="error-message">{this.state.errorMessage}</div>
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