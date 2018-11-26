import React, { Component } from 'react';
import './Test.scss';

class Counter extends Component {
    /*    state = {
           //count: 0
           count: this.props.counter.value  //props from Test.js
           // So instead of this.props.value: this.props.counter.value 
           //this is run only once, when an instance of the counter comp is created
   
       } */  //remove the state for Reset to work


    //move this method to Parent comp for no state here anymore
    /*   handleIncrement = () => {
          console.log('increment');
          this.setState({
              count: this.state.count + 1  //just increment by 1
          })
      } */

    formatCount = () => {
        // const { count } = this.state;
        const { value } = this.props.counter;
        // const x = <h5>Zero</h5>;  //jsx expression in a variable is fine
        const x = 'Zero';  //jsx expression in a variable

        return (
            value === 0 ? x : value  //om count=0, skriv ut x, annars skriv ut count
        )
    }

    render() {
        // console.log('counter props', this.props);  //obs! bra att kolla häri render() för stateful comp

        let countClasses = 'button ';
        // const { count } = this.state;
        const { value } = this.props.counter;
        countClasses += (value === 0 ? 'yellow-btn' : 'turquoise-btn');

        return (
            <div>

                {this.props.children}
                <span className={countClasses}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className='button green-btn'>Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className='button red-btn'>Delete</button>
                {/* Both value and id are properties of the COUNTER object, so they can go as one (=counter) */}
                {/* So instead of this.props.id: this.props.counter.id */}


                {/* Button is placed here, but the delete-func is in Parent-comp because the list of counters is in that state */}
                {/* This comp will RAISE the event, and the Parent-comp will HANDLE it */}
                {/* To pass a PARAMETER, pass an arrow func:  onClick={() => */}
                {/*  Namingconvention: Raising an event: OnDelete (=prop name), handle an event: handleDelete() */}
                {/* d is the name of our prop that sends the id from Parent comp */}

            </div>
        );
    }
}
export default Counter