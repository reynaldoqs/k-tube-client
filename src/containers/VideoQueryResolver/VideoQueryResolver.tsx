import React from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { useDispatch, useSelector } from 'react-redux';

import { VideoPlayer } from '../../components';
import { KARAOKE_VIDEO_YOUTUBE } from '../../constants';
import { selectVideo, videoProgress, videoPlayerSelector, videoReady } from '../../store/VideoPlayer/VideoPlayerSlice';

export function VideoQueryResolver(): React.ReactElement {
    //const [video] = useQueryParam(KARAOKE_VIDEO_YOUTUBE, StringParam);

    const { isPlaying, video } = useSelector(videoPlayerSelector);
    const videoUrl = `https://www.youtube.com/watch?v=${video?.id.videoId}`;
    const dispatch = useDispatch();

    const onReady = (e: any): void => {
        console.log('esta ready');
        dispatch(videoReady());
    };
    const onprogress = (e: any): void => {
        // eslint-disable-next-line functional/no-expression-statement
        dispatch(videoProgress(e));
    };
    const onEnded = (): void => {
        console.log('on end');
    };

    return (
        <VideoPlayer
            url={videoUrl}
            volume={1}
            playing={isPlaying}
            onReady={onReady}
            onProgress={onprogress}
            onEnded={onEnded}
        />
    );
}
