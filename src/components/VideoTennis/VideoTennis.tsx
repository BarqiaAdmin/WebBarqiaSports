import React from 'react';

import './VideoTennis.css'

const VideoTennis = () => {
    return (
        <video id="video-tennis" autoPlay muted loop>
            <source src='videos/tennis.mp4' type='video/mp4' />
        </video>
    )
}

export default VideoTennis;