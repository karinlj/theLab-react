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
              If you want to see how these tasks can be solved using the Boozang tool you can launch it <a href="http://thelab.boozang.com/bz-staging.html?fbclid=IwAR0QFbdC4i9iguRNXQjXhYgnyNjS0_qnVwbw6Q3Od8-fo753MIhIS0ZN7DM#5bea26946c43587a5950f410/0.0.1/m5/t2/">here</a>. 
</p>
<p>
You will be able to play around with the tool, but in order to save your tests to our Cloud server you'll need to sign-up for a <a target="_blank" href="https://ai.boozang.com/#security/signup">Free Trial</a>.
             </p>
              <p>There will also be a Udemy course shortly that will take you through each tak with a solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <VideoSidebar
          src="https://www.youtube.com/embed/x0TqzRIIsSM"
          height="230"
          width="100%"
          title="Welcome to The Lab"
        />
        <VideoSidebar
          src="https://www.youtube.com/embed/guQlg80v3V8"
          height="230"
          width="100%"
          title="Welcome to The Lab"
        />
      </div>
    </div>
  );
};
export default Home;
