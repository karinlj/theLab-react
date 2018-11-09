import React, { Component } from 'react'
import Sidebar from './Sidebar';
import ContentData from '../data/pageContent.json';  //the name ContentData is made up

class PageContent extends Component { //class based

    render() {

        const heading = ContentData.catOrDog.heading;
        const text = ContentData.catOrDog.text;

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="page-content-section">
                        <header>
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



                        </header>
                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Hello PageContent" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>

            </div>
        )
    }
}
export default PageContent
