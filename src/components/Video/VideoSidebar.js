
import React from 'react';
import './Video.scss';

const VideoSidebar = props => {

    const src = props.src;
    const height = props.height;
    const width = props.width;
    const title = props.title;

    return (
        <div className="video-section" >
            <iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" src={src} height={height} width={width} title={title} />
        </div>
    )
}

export default VideoSidebar