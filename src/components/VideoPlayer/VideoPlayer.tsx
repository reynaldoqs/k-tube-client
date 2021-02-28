import React from 'react';
import ReactPlayer from 'react-player';

import { FuncEmpty, FuncParam } from '../../types';
import { VideoPlayerContainer, VideoPlayerLayer } from './elements';

export type VideoPlayerProps = {
    readonly playing: boolean;
    readonly url: string;
    readonly volume: number;
    readonly onProgress: FuncParam<any, void>;
    readonly onReady: FuncParam<any, void>;
    readonly onEnded: FuncEmpty;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = (props: VideoPlayerProps): React.ReactElement => {
    return (
        <VideoPlayerContainer>
            <ReactPlayer {...props} width="100%" height="100%" />
            <VideoPlayerLayer playing={props.playing}></VideoPlayerLayer>
        </VideoPlayerContainer>
    );
};
