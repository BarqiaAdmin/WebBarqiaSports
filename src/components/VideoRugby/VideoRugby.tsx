import React from 'react';

import './VideoRugby.css';

const VideoRugby = () => {
    return (
        <div>
            <video id="video-rugby" autoPlay muted loop>
                <source src="videos/rugby.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoRugby;