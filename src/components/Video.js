import React from "react";

const Video = () => {
  return (
    <div className="row">
      <div className="embed-responsive embed-responsive-1by1">
        <iframe
          className="embed-responsive-item "
          src=".../video/TimeLaps.mp4"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
