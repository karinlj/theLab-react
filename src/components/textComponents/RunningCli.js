import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const RunningCli = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">Running from CLI</h1>

          <div className="card">
            <div className="card-body">
              <p>
               After making sure your tests are running stable in your browser (supervised), it's time to take
               the step to start plugging in your tests from the command-line. 
              </p>
              <p>
              In this example, we use Node Package Manage to install the open-source package Boozang, 
              that utilizes <a traget="_blank" href="https://github.com/GoogleChrome/puppeteer">Puppetteer</a>, 
              from Google Chrome development team, that utilized Boozang to be run from the command-line 
              ("headless" or "normal" mode).
              </p>
              <p>
               Remember, a CI server is simply a command-line runner and a repository for your reports. 
               Use this as a great starting point to automate your whole release pipeline and start pushing
               code confidently and fast. 
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
export default RunningCli;
