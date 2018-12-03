import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const Tool = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">The Boozang Tool</h1>

          <div className="card">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh quis
                mauris vehicula lacinia in ac risus. Nulla eget magna tempus
              </p>
              <p>
                {" "}porttitor quam et, tincidunt magna. Vestibulum tempus bibendum nunc, id
                lobortis dolor vulputate eget. Integer blandit justo vitae quam posuere, id eleifend
                nisi accumsan.
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
export default Tool;
