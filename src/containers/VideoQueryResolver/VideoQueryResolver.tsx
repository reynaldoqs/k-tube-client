import React from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { useDispatch } from 'react-redux';

import { VideoPlayer } from '../../components';
import { KARAOKE_VIDEO_YOUTUBE } from '../../constants';
import { selectVideo, progress } from '../../store/VideoPlayer/VideoPlayerSlice';

export function VideoQueryResolver(): React.ReactElement {
    const [video] = useQueryParam(KARAOKE_VIDEO_YOUTUBE, StringParam);
    const videoUrl = `https://www.youtube.com/watch?v=${video}`;

    const dispatch = useDispatch();

    const onReady = (e: any): void => {
        console.log('onReady', e);
    };
    const onprogress = (e: any): void => {
        // eslint-disable-next-line functional/no-expression-statement
        dispatch(progress(e));
    };
    const onEnded = (): void => {
        console.log('on end');
    };

    return (
        <VideoPlayer
            url={videoUrl}
            volume={1}
            playing={false}
            onReady={onReady}
            onProgress={onprogress}
            onEnded={onEnded}
        />
    );
}
