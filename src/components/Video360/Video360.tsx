import Container from 'react-bootstrap/Container';

const Video360 = () => {
    return (
        <Container>
            <script src="https://aframe.io/releases/1.4.0/aframe.min.js" />
            <a-scene>
                <a-assets>
                    <video
                        id='video-360-1'
                        preload='auto'
                        src='360-1.mp4'
                        autoPlay
                        muted
                        loop
                    >
                    </video>
                </a-assets>
                <a-entity
                    material="shader: flat; src: #video-360-1"
                    geometry="primitive: plane; width: 160; height: 90;"
                    position="0 60 -250"
                    rotation="0 35 0"
                    play-on-click
                    visible="false"
                >
                </a-entity>
            </a-scene>
        </Container>
        
    )
}

export default Video360;