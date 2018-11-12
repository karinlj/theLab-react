import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class Scramble extends Component { //class based
    state = {
        class: 'btn turquoise',
        id: 'big',
        index: 0, //for counting up id, class, content
        content: 'lion',
        orderClass: 'col order-first',
        message: '',
        messageClass: 'message',
    };


    scrambleId = () => {

        let ids = ['small', 'big', 'bigger'];
        let i = this.state.index;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }
        console.log(i);

        let scrambleId = ids[i];

        /*  The modulus way:
            i++;
           let scrambleId = ids[i % ids.length];    //heltalsresten av 0 = 0,   3 % 3 = 0
   
           console.log(i);
           console.log(scrambleId); */

        this.setState({
            id: scrambleId,
            index: i,
            messageClass: 'message'
        })

        /*  Different loops:
          var i;
          for (i = 0; i < ids.length; ++i) {
  
              console.log(ids[i]);
          } 

           ids.forEach(function(value) {
                   console.log(value);
           });

           ids.map(function (value, index) {
               return console.log(value);
           }); */


    }

    scrambleClass = () => {
        let classes = ['btn pink', 'btn turquoise', 'btn yellow'];

        let i = this.state.index;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }

        console.log(i);

        let scrambleClass = classes[i];

        this.setState({
            class: scrambleClass,
            index: i,
            messageClass: 'message'
        })
    }

    scrambleContent = () => {

        let contents = ['lion', 'puma', 'tiger'];

        let i = this.state.index;

        if (i === 0) {
            i = 1;
        }
        else if (i === 1) {
            i = 2;
        }
        else { i = 0; }

        console.log(i);

        let scrambleContent = contents[i];

        this.setState({
            index: i,
            content: scrambleContent,
            messageClass: 'message'
        })
    }

    scrambleOrder = () => {

        let orderClasses = ['col order-first', 'col order-last'];

        let i = this.state.index;

        if (i === 0) {
            i = 1;
        }
        else { i = 0; }

        console.log(i);

        let scrambleOrderClass = orderClasses[i];

        console.log(scrambleOrderClass);

        this.setState({
            index: i,
            order: scrambleOrderClass,
            messageClass: 'message'
        })
    }

    compare = (isSuccess) => {

        let messageNew = '';
        if (isSuccess) {  //if isSuccess is true
            messageNew = 'Success!';
            console.log(messageNew);
        }
        else {
            messageNew = 'Fail!';
            console.log(messageNew);
        }

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
                            <div className={this.state.order}>

                                <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />

                            </div>
                            <div className="col order-5">

                                <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />

                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-8">

                                <div className="scrambleText">
                                    {/*  <div className={this.state.messageClass}> */}

                                    <p>Current button <strong>id</strong> is: <br /> <strong>{this.state.id}</strong></p>

                                    <p>Current button <strong>class</strong> is: <br /> <strong>{this.state.class}</strong></p>

                                </div>

                                <div className="scramble-btns">

                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Id" clickProp={this.scrambleId} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Class" clickProp={this.scrambleClass} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Content" clickProp={this.scrambleContent} />
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Order" clickProp={this.scrambleOrder} />

                                </div>
                            </div>

                            <div className="col-4">

                                <div className={this.state.messageClass}>
                                    <h4>{this.state.message}</h4>
                                </div>

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
