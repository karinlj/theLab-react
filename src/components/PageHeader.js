import React, { Component } from 'react'
import HeaderData from '../data/headerData.json';  //the name HeaderData is made up - name of the json data


class PageHeader extends Component { //class based

    /*     state = {
            contents: [
                { id: 1, heading: "Cat or dog", text: "Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi." },
    
                { id: 2, heading: "Yellow or red", text: "Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." }
    
            ]
        } */

    render() {

        const heading = HeaderData.todoList.heading;
        const text = HeaderData.todoList.text;

        return (
            <div>
                <h1>Hej json</h1>


                <h1>{heading}</h1>






                {/*     <p>{text.split('\n').map((item, key) => {
                    return (
                        <span key={key}>{item}<br /></span>
                    )
                })}
                </p> */}




                {/* 
                        - Convert your data to become an array 
                         - Map iterates over an array
                         - create an unordered list that showed the names of all our users
                         -  "user", was a representation of the value at each position 
                         -  "i", was a representation of the index that the "user" was in 
                         -  React performs optimally if you have a unique "key" attribute associated with the items being created
                         -  map goes through each element in your array (like a loop) and will create a new array based on what you tell it to return. 
                     */}
                {/*  {this.state.users.map(function (user, i) {
                    return (
                        <div>
                            <h1 key={i}>{user.heading}</h1>
                            <p key={i}>{user.text}</p>
                        </div >

                    )
                })} */}

            </div>
        )
    }
}
export default PageHeader

