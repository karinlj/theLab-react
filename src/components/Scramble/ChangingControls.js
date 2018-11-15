import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class ChangingControls extends Component {
    state = {
        contentAdd: 'Add',
        contentDelete: 'Delete',
        message: '',
        messageClass: 'message',
    };

    handleChangeAdd = (e) => {  //e = here: the input element
        this.setState({
            contentAdd: e.target.value   //value= what user types in
        })
    }

    handleSubmitAdd = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChangeDelete = (e) => {
        this.setState({ //value= what user types in
            contentDelete: e.target.value
        })
    }
    handleSubmitDelete = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    printAnimal = () => {

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

                        <form className="todo-form" onSubmit={this.handleSubmitAdd}>
                            <label htmlFor="">Change wording for Add:</label><br></br>

                            <input type="text" onChange={this.handleChangeAdd} value={this.state.contentAdd} />
                        </form>

                        <form className="todo-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="">Change wording for Delete:</label><br></br>

                            <input type="text" onChange={this.handleChangeDelete} value={this.state.contentDelete} />
                        </form>

                        <div className="changingControlBtns">
                            <div className="row justify-content-between">

                                <div className="col-6">
                                    <MainBtn classProp="button orange-btn" clickProp={this.printAnimal}>{this.state.contentAdd} Kangaroo</MainBtn>

                                    <MainBtn classProp="button green-btn" clickProp={this.printAnimal}>{this.state.contentAdd}  Koala</MainBtn>

                                    <MainBtn classProp="button red-btn" clickProp={this.printAnimal}>{this.state.contentAdd} Dolphin</MainBtn>
                                </div>

                                <div className="col-6">
                                    <MainBtn classProp="button orange-btn" clickProp={this.printAnimal}>{this.state.contentDelete} Kangaroo</MainBtn>

                                    <MainBtn classProp="button green-btn" clickProp={this.printAnimal}>{this.state.contentDelete} Koala</MainBtn>

                                    <MainBtn classProp="button red-btn" clickProp={this.printAnimal}>{this.state.contentDelete} Dolphin</MainBtn>
                                </div>
                            </div>
                        </div>

                        <div className="changingControlLinks">

                            <div className="row justify-content-between">

                                <div className="col-12">
                                    <a href="changingControls?add=New">Change Add to New</a>
                                </div>
                                <div className="col-12">
                                    <a href="changingControls?delete=Remove">Change Delete to Remove</a>

                                </div>
                                <div className="col-12">
                                    <a href="changingControls?add=Create">Change Add to Create</a>

                                </div>
                                <div className="col-12">
                                    <a href="changingControls?delete=Del">Change Delete to Del</a>

                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">

                            <div className="col">
                                <div className="scrambleText">
                                    <p>Click the links to test common wording changes.</p>

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
