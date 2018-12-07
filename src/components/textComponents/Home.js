import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const Home = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">Welcome to theLab!</h1>

          <div className="card">
            <div className="card-body">
              <p>
                Welcome to the <strong>Boozang Test Lab</strong>!
              </p>
              <p>
                Test different aspects of web applications and practice how to do test automation.
              </p>
              <p>The site also to acts as a testing ground for your automation tools.</p>
              <p>
                Here you find a number of test categories, that each has a number of problems to solve. Each problem has a brief description and an information box of why this problem is worth solving.
                There is also one or two videos on how to solve it using the Boozang tool.{" "}
              </p>
              <p>
                <a href="https://boozang.com/">Boozang</a> also gives a free
                <a href="https://www.udemy.com/code-less-test-automation-with-boozang/">
                  {" "}Udemy course
                </a>{" "}
                that takes you through each task with solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <VideoSidebar
          src="https://www.youtube.com/embed/EPA-e1vENSs"
          height="230"
          width="100%"
          title="getting-started"
        />
      </div>
    </div>
  );
};
export default Home;
