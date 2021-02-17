import React from 'react';
import { useSelector } from 'react-redux';

import { PlayerBar } from '../../components';
import { videoPlayerSelector } from '../../store/VideoPlayer/VideoPlayerSlice';

export const VideoControlBar: React.FC = (): React.ReactElement => {
    const {
        progress: { played },
    } = useSelector(videoPlayerSelector);

    return <PlayerBar progress={played * 100} />;
};
