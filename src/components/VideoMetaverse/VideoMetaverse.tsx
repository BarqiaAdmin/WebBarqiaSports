import React from 'react';

import './VideoMetaverse.css';

const VideoMetaverse = () => {
    return (
        <video id="videoMetaverse" autoPlay muted loop>
            <source src='videos/barqia-metaverse.mp4' type='video/mp4' />
        </video>
    )
}

export default VideoMetaverse;