import React from 'react';

import './VideoKick.css';

const VideoKick = () => {
    return (
        <video id="video-kick" autoPlay muted loop>
            <source src="videos/kick.mp4" type="video/mp4" />
        </video>
    )
}

export default VideoKick;