import React from 'react';

import './VideoGlobe.css'

const VideoGlobe = () => {
    return (
        <video id="video-globe" autoPlay muted loop>
            <source src="globe.mp4" type="video/mp4" />
        </video>
    )
}
export default VideoGlobe;