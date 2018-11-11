import React, { Component } from 'react'
import HeaderData from '../data/headerData.json';  //the name HeaderData is made up - name of the json data

//import HeaderData from '../data/headerData-simple.json';

class PageHeader extends Component { //class based

    render() {

        const heading = HeaderData.todoList.heading;
        const text = HeaderData.todoList.text;

        return (
            <div>
                <h1>Hej json</h1>


                <h1>{heading}</h1>
                <p>{text.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}</p>

                {/*  <h1>{heading}</h1>
                <p>{text}</p> */}


                {/*   {HeaderData.map((headerDetail, index) => {   //the name contentDetail is made up - name of every "sub object"
                    return (
                        <div>
                            <h1>{headerDetail.heading}</h1>
                            <p>{headerDetail.text}</p>

                        </div>
                    )
                })} */}

            </div>
        )
    }
}
export default PageHeader
