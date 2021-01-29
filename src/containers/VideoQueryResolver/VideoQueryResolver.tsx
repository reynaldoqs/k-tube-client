import React from 'react';
import ReactPlayer from 'react-player';
import { StringParam, useQueryParam } from 'use-query-params';

import { KARAOKE_VIDEO_YOUTUBE } from '../../constants';
export function VideoQueryResolver(): React.ReactElement {
    const [video] = useQueryParam(KARAOKE_VIDEO_YOUTUBE, StringParam);
    const videoUrl = `https://www.youtube.com/watch?v=${video}`;

    return <ReactPlayer url={videoUrl} />;
}
