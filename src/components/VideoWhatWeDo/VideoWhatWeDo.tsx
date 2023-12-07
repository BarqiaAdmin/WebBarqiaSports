import React from 'react';

import './VideoWhatWeDo.css';

const VideoWhatWeDo = () => {
    return (
        <div>
            <video id="video-what-we-do" autoPlay muted loop>
                <source src="videos/tennis.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoWhatWeDo;