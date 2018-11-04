import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MaineBtn from '../MaineBtn';
import './Strings.scss';


class ConcatStrings extends Component { //class based
    state = {
        concatStr: '',
        errorMessage: ''
    };

    generateStrings = () => {
        let strings = ['bear', 'elefant', 'bunny', 'horse', 'cow', 'tiger', 'lion', 'mouse', 'bird', 'turtle'];

        let randStr1 = strings[Math.floor(Math.random() * strings.length)];
        let randStr2 = strings[Math.floor(Math.random() * strings.length)];

        let randStr = randStr1 + randStr2;

        this.setState({
            concatStr: randStr
        })

        alert(randStr);
    }

    handleChange = () => {

    }

    compare = (compareValue) => {

        let errMessage = '';
        if (compareValue === this.state.concatStr) {
            errMessage = 'Success!';
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }

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

                            <MaineBtn classProp="button generate-btn" titleProp="Generate strings" clickProp={this.generateStrings} />
                            <div className="error-message">{this.state.errorMessage}</div>
                        </div>


                        <form className="todo-form" onSubmit={() => this.compare()}>

                            <label htmlFor="">Type the two strings together:</label><br></br>

                            <input type="text" onChange={this.handleChange} />
                        </form>


                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello YellowOrRed" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>
            </div >
        )
    }
}
export default ConcatStrings