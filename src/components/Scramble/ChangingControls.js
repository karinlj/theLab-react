import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class ChangingControls extends Component {
    state = {
        content: '',
        message: '',
        messageClass: 'message',
    };



    changeContent = () => {

        this.setState({
            messageClass: 'message show',
        })
    }


    handleSubmit = () => {

    }


    handleChange = () => {

    }


    compare = (isSuccess) => {

        this.setState({
            messageClass: 'message show',
        })
    }


    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="changingControl-section">
                        <header>
                            <HeaderText componentName="changingControls" />
                        </header>

                        <form className="todo-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="">Write something:</label><br></br>

                            <input type="text" onChange={this.handleChange} value={this.state.content} />
                        </form>

                        <div className="changingControlBtns">
                            <div className="row justify-content-between">

                                <div className="col-sm-4 col-md-12 col-xl-4">
                                    <MainBtn classProp="button pink-btn" titleProp="Add Donkey" clickProp={this.changeContent} />
                                </div>
                                <div className="col-sm-4 col-md-12 col-xl-4">
                                    <MainBtn classProp="button turquoise-btn" titleProp="Add Zebra" clickProp={this.changeContent} />

                                </div>
                                <div className="col-sm-4 col-md-12 col-xl-4">
                                    <MainBtn classProp="button yellow-btn" titleProp="Add Horse" clickProp={this.changeContent} />

                                </div>
                            </div>
                        </div>

                        <div className="changingControlLinks">

                            <div className="row justify-content-between">

                                <div className="col-12">
                                    <a href="https://getbootstrap.com/">Some link</a>
                                </div>
                                <div className="col-12">
                                    <a href="https://getbootstrap.com/">Some other link</a>

                                </div>
                                <div className="col-12">
                                    <a href="https://getbootstrap.com/">Some third link</a>

                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">

                            <div className="col">
                                <div className="scrambleText">
                                    <p>Some text??</p>

                                </div>
                            </div>
                            <div className="col">
                                <div className={this.state.messageClass}>
                                    Some message?
                                    <h4>{this.state.message}</h4>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="changingControls" />
                </div>
            </div>
        )
    }
}
export default ChangingControls
