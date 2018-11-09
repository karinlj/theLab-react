import React from 'react';
import { Player } from 'video-react';
import VideoSidebar from './Video/VideoSidebar';

const Home = () => {
    return (
        <div className="row justify-content-between">
            <div className="col-12 col-md-6">
                <div className="home-section">

                    <h1 className="center">Welcome to theLab!</h1>

                    <div className="card">
                        <div className="card-body">
                            <p>Welcome to the <strong>Boozang Test Lab</strong>!</p>
                            <p>Test different aspects of web applications and practice how to do test automation.</p>
                            <p>The site also to acts as a testing ground for your automation tools.</p>
                            <p>There are a number of test categories, that each has a number of problems to solve. Each problem has a help text on how this is solved using the Boozang tool, and a video on how to solve it. </p>
                            <p><a href="https://boozang.com/">Boozang</a> also gives a free
                            <a href="https://www.udemy.com/code-less-test-automation-with-boozang/"> Udemy course</a> that takes you through each task with solution.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-5">

                <VideoSidebar src="https://youtu.be/CWMQWIJyttI" height="230" width="100%" title="getting-started" />


                <Player>

                    <source src="https://youtu.be/CWMQWIJyttI" />
                </Player>
            </div>
        </div>
    )
}
export default Home