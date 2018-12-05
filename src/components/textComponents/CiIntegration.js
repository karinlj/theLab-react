import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const CiIntegration = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">CI integration</h1>

          <div className="card">
            <div className="card-body">
              <p>
               Now when you've made sure your tests are running from the command-line you are ready 
               to plug them in to your CI pipeline. In this example we will be using Jenkins CI server, but
               the approach is the same for any CI server integration. 
              </p>
               <p>
               If you are currently not using a CI server such as Jenkins or CirleCI, don't worry. Boozang has basic
               CI functionality built-in, and by simply making sure your tests can be run unsupervised, you are
               almost there. Boozang has both built-in scheduling and email notfications, which makes a CI server 
               a nice-to-have but not a necessity. 
              </p>
        
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <VideoSidebar
          src="https://www.youtube.com/embed/YcCw6cS7Uy0"
          height="230"
          width="100%"
          title="getting-started"
        />
      </div>
    </div>
  );
};
export default CiIntegration;
