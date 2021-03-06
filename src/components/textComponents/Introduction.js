import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const Introduction = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">Introduction</h1>

          <div className="card">
            <div className="card-body">
              <p>
                Sometimes wrting test automation code is as time-consuming as writing the code itself. 
                One could wonder if it's really worth it. Isn't writing the features more important than testing them?
                </p>
                <p>
                Perhaps this is accurate in the beginning of your applications life-cycle. But as your application grows, 
                new application features tend to break existing ones. 
              </p>
              <p>
                Having automated end-to-end tests greatly reduces the amount of manual testing needed. 
                Developers get instant feedback when their code updates break crucial application flows. 
                </p> 
                <p>
                This increases the productive output from your development team dramatically, and allows you to
                push features into your live system at a faster pace, while resting assured you didn't introduce bugs in your live system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <VideoSidebar
          src="https://www.youtube.com/embed/-91YkYkmjZk"
          height="230"
          width="100%"
          title="Why do test automation"
        />
        <VideoSidebar
          src="https://www.youtube.com/embed/850MnrHoEYc"
          height="230"
          width="100%"
          title="getting-started"
        />
      </div>
    </div>
  );
};
export default Introduction;
