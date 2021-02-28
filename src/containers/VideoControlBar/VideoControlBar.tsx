import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PlayerBar } from '../../components';
import { videoPlayerSelector, playVideo, pauseVideo, dequeueVideo } from '../../store';

export const VideoControlBar: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {
        progress: { played },
        isPlaying,
        videosQueue,
        video,
    } = useSelector(videoPlayerSelector);

    const handlePlay = (): void => {
        console.log('vamos a tocar');
        dispatch(playVideo());
    };

    const handlePause = (): void => {
        dispatch(pauseVideo());
    };
    const handleDequeue = (): void => {
        dispatch(dequeueVideo());
    };

    return (
        <PlayerBar
            progress={played * 100}
            onPause={handlePause}
            onPlay={handlePlay}
            onDequeue={handleDequeue}
            isPlaying={isPlaying}
            videosQueue={videosQueue}
            currentVideo={video}
        />
    );
};
