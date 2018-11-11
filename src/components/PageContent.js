import React, { Component } from 'react'
import ContentData from '../data/pageContent.json';  //the name ContentData is made up

class PageContent extends Component { //class based

    render() {

        const heading = ContentData.catOrDog.heading;
        const text = ContentData.catOrDog.text;

        return (
            <div>
                <h1>{heading}</h1>
                <p>{text}</p>




                {/*     {ContentData.map((contentDetail, index) => {   //the name contentDetail is made up
                                return (
                                    <div>
                                        <h1>{contentDetail.heading}</h1>
                                        <p>{contentDetail.text}</p>

                                    </div>
                                )

                            })} */}

            </div>
        )
    }
}
export default PageContent
