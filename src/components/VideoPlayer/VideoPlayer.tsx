import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { FuncEmpty, FuncParam } from '../../types';

import { VideoPlayerContainer } from './elements';

const Player = (props: any): any => <ReactPlayer {...props} width="100%" height="100%" />;

const StyledPlayer = styled(Player)`
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
`;

type Props = {
    readonly playing: boolean;
    readonly url: string;
    readonly volume: number;
    readonly onProgress: FuncParam<any, void>;
    readonly onReady: FuncParam<any, void>;
    readonly onEnded: FuncEmpty;
};

export const VideoPlayer: React.FC<Props> = (props: Props): React.ReactElement => {
    return (
        <VideoPlayerContainer>
            🌜
            <StyledPlayer {...props} playIcon={<div>playa</div>} />
            🌞
        </VideoPlayerContainer>
    );
};
