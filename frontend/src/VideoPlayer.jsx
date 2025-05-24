import React, { forwardRef } from "react";

const VideoPlayer = forwardRef((props, ref) => (
  <video ref={ref} width="600" controls>
    <source src="/your-video.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
));

export default VideoPlayer;
