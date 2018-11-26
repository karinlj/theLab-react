import React, { Component } from 'react';
import TestChildOne from './TestChildOne';
import MainBtn from '../MainBtn';
import './Test.scss';
import Counter from './Counter';
import CounterNav from './CounterNav';

class Test extends Component {
    state = {
        showBtnMessage: false,
        tags: ['tag1', 'tag2', 'tag3'],
        counters: [  //just because I render multiple counter components 
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
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

    handleDelete = (counterId) => {  //Passing paramenter: this.props.id from Counter.js that comes from THIS comp state first
        //The component that OWNS a piece of the STATE, should be the one MODIFYING it. 
        //here: the list of counters is here and we want to modify it

        //console.log('deletefunc called', counterId);
        //create a NEW array without a given counter
        //using the filter() to get the counters EXCEPT the one with the given id
        const countersNew = this.state.counters.filter(c => c.id !== counterId)
        this.setState({
            counters: countersNew
        })
    }

    handleReset = () => {
        //create a new array of counters
        const countersNew = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({
            counters: countersNew
        })
    }

    handleIncrement = (counter) => {
        // console.log('increment', counter);
        const countersNew = [...this.state.counters];  //cloning the array

        //we need fo find the index of te counter we recieve as a parameter
        const index = countersNew.indexOf(counter);

        countersNew[index] = { ...counter };  //cloning the counter object
        countersNew[index].value++;
        console.log(this.state.counters[index]);

        this.setState({
            counters: countersNew
        })
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
                        <MainBtn classProp="button pink-btn"
                            clickProp={this.handleClick}>Toggle content</MainBtn>

                        {/* if showMessage is true, display message, otherwise nothing */}
                        {showBtnMessage === true ? <p>I can toggle content...</p> : ''}

                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h4>Counter</h4>
                        <CounterNav totalCounters={this.state.counters.filter(
                            counter => counter.value > 0
                        ).length} />

                        {/* map each counter to the Counter component */}
                        {/* Each counter has its own state in the Counter comp */}
                        <button className='button pink-btn'
                            onClick={this.handleReset}>Reset</button>

                        {this.state.counters.map(counter => (
                            <Counter
                                key={counter.id}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement}
                                counter={counter}>

                                {/*  id={counter.id}
                                value={counter.value}> */}
                                {/* Both value and id are properties of the COUNTER object, so they can go as one (=counter) */}
                                {/*  Namingconvention: Raising an event: OnDelete (=prop name), handle an event: handleDelete() */}

                                <h6>Counter #{counter.id}</h6>
                            </Counter>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Test