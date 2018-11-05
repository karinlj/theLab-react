import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import SubmitBtn from '../SubmitBtn';
import './Timing.scss';

class Speed extends Component { //class based
    state = {

    };

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="timing-section">
                        <header>
                            <h1 className="">Speed</h1>
                            <p>Praesent id velit volutpat, finibus mi eleifend, molestie enim. Sed non massa nec lectus feugiat sollicitudin ut et nunc. Ut ac felis tellus.</p>
                        </header>



                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello Speed" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>

            </div>
        )
    }
}

export default Speed