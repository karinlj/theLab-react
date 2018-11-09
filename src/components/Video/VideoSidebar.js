
import React from 'react'

const VideoSidebar = props => {

    const src = props.src;
    const height = props.height;
    const width = props.width;

    return (
        <div className="video-section" >
            <iframe src={src} height={height} width={width} />

        </div>
    )
}

export default VideoSidebar