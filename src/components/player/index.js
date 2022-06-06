import React from 'react';
import ReactPlayer from 'react-player/lazy'
import VideoPlayerWrap from "./style/wrap";

const VideoPlayer = ({url}) => {
    return (
        <VideoPlayerWrap>
            <ReactPlayer
                url={url}
                width='100%'
                height='100%'
            />
        </VideoPlayerWrap>
    );
};

export default VideoPlayer;