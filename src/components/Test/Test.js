import React, { Component } from 'react';
import TestChildOne from './TestChildOne';
import MainBtn from '../MainBtn';
import './Test.scss';

class Test extends Component {
    state = {
        showBtnMessage: false,
        tags: ['tag1', 'tag2', 'tag3']
    }

    handleDataCallback = (helloMess) => {  //being called in childComp via prop in TestForm
        console.log(this);
        alert(helloMess);  //alert something
    }

    handleClick = () => {
        this.setState({
            showBtnMessage: !this.state.showBtnMessage
        })
    }

    renderTags = () => {  //If statement in function that is called with curly braces in the jsx below
        const { tags } = this.state;

        if (tags.length === 0) return <p>There are no tags!</p>; //return jsx paragraph

        else return <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() {

        const { showBtnMessage } = this.state       // =const showBtnMessage =  this.state.showBtnMessage

        return (
            <div className="test-section">
                <h1>My test component</h1>

                <div className="card">
                    <div className="card-body">
                        <h4>Map method of arrays</h4>
                        <p>We get each tag (a string) and map it into an li-tag.</p>
                        <p>With map we need to set the key-attribute, a unique key for every item.</p>
                        {/* Map each element in the array into a React element (jsx).
                         Render dynamically, so curly braces.
                         With arrow: tag goes to...we get each tag (a string) and map it into an li-tag (or a js-object).
                         Render the tag dynamically, so curly braces. 
                         A unique key (only unique for this list) for every item. (ex:tag.id in a real app because items might be objects)*/}

                        {this.state.tags.length === 0 && 'Please create a new tag.'}
                        {this.renderTags()}
                    </div>
                </div>

                <TestChildOne dataCallback={this.handleDataCallback} />

                <div className="card">
                    <div className="card-body">
                        <MainBtn classProp="button pink-btn" clickProp={this.handleClick}>Toggle content</MainBtn>

                        {/* if showMessage is true, display message, otherwise nothing */}
                        {showBtnMessage === true ? <p>I can toggle content...</p> : ''}

                    </div>
                </div>

            </div >
        );
    }
}
export default Test