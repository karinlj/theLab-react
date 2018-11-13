import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Scramble.scss';
import HeaderText from '../HeaderText';

class Scramble extends Component { //class based
    state = {
        class: 'btn pink',
        id: 'big',
        indexId: 0, //for counting up 
        indexClass: 0,
        indexContent: 0,
        content: 'lion',
        changingBtnLeft: true,
        message: '',
        messageClass: 'message',
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
            messageClass: 'message'
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
            messageClass: 'message'
        })
    }

    scrambleOrder = () => {

        this.setState({

        })

    }

    renderBtns = () => {

        let animalBtns;

        if (this.state.changingBtnLeft) {

            animalBtns =
                <div className="row justify-content-between">
                    <div className="col">
                        <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />
                    </div>
                    <div className="col">
                        <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />
                    </div>
                </div>;
        }
        else {
            animalBtns =
                <div className="row justify-content-between">
                    <div className="col">
                        <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />
                    </div>
                    <div className="col">
                        <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />
                    </div>
                </div>;
        }
        return animalBtns;
    }


    compare = (isSuccess) => {

        let messageNew = '';
        if (isSuccess) {  //if isSuccess is true
            messageNew = 'Success!';
            // console.log(messageNew);
        }
        else {
            messageNew = 'Fail!';
        }

        this.setState({
            message: messageNew,
            messageClass: 'message show',
        })
    }

    render() {

        /*   let animalBtns;
          if (this.state.btnOrder) {
  
              animalBtns =
                  <div className="row justify-content-between">
                      <div className="col">
                          <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />
                      </div>
                      <div className="col">
                          <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />
                      </div>
                  </div>;
          }
          else {
              animalBtns =
                  <div className="row justify-content-between">
                      <div className="col">
                          <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />
                      </div>
                      <div className="col">
                          <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />
                      </div>
                  </div>;
          } */



        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="scramble-section">
                        <header>
                            <HeaderText componentName="scramble" />
                        </header>

                        <div className="animalBtns">

                            {this.renderBtns()}

                            {/* {animalBtns} */}


                            {/*  <div className="row justify-content-between">

                                <div className="col">

                                    <MainBtn idProp={this.state.id} classProp={this.state.class} titleProp={this.state.content} clickProp={() => this.compare(true)} />
                                </div>

                                <div className="col">
                                    <MainBtn idProp="normal" classProp="button green-btn" titleProp="elephant" clickProp={() => this.compare(false)} />
                                </div>
                            </div> */}
                        </div>




                        <div className="row justify-content-between">

                            <div className="col">
                                <div className="scrambleText">
                                    <p>Current button <strong>id</strong> is: <strong>{this.state.id}</strong></p>

                                    <p>Current button <strong>class</strong> is: <strong>{this.state.class}</strong></p>
                                </div>
                            </div>
                            <div className="col">
                                <div className={this.state.messageClass}>
                                    <h4>{this.state.message}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">

                            <div className="col-sm-6 col-md-12 col-xl-6">
                                <div className="scrambleBtns">
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Id" clickProp={this.scrambleId} />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-12 col-xl-6">
                                <div className="scrambleBtns">
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Content" clickProp={this.scrambleContent} />
                                </div>

                            </div>
                        </div>

                        <div className="row justify-content-between">


                            <div className="col-sm-6 col-md-12 col-xl-6">
                                <div className="scrambleBtns">
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Class" clickProp={this.scrambleClass} />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-12 col-xl-6">
                                <div className="scrambleBtns">
                                    <MainBtn classProp="button orange-btn" titleProp="Scramble Order" clickProp={this.scrambleOrder} />
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
