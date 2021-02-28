import React from 'react';
import { map } from 'ramda';

import { FuncParam, Video } from '../../types';
import { Container, VideoListItem, Subtitle } from '..';
import { VerticalVideoListContainer, VerticalList } from './elements';

type Props = {
    readonly videos: readonly Video[];
    readonly onPlayVideo: FuncParam<Video, void>;
    readonly onEnqueueVideo: FuncParam<Video, void>;
};

export const VideoListVertical: React.FC<Props> = ({
    videos,
    onPlayVideo,
    onEnqueueVideo,
}: Props): React.ReactElement => {
    const randerVideos = (video: Video): React.ReactElement => (
        <VideoListItem key={video.id.videoId} video={video} onPlayVideo={onPlayVideo} onEnqueueVideo={onEnqueueVideo} />
    );
    return (
        <VerticalVideoListContainer>
            <Container>
                <Subtitle>Resultados</Subtitle>
            </Container>
            <VerticalList>{map(randerVideos, videos)}</VerticalList>
        </VerticalVideoListContainer>
    );
};
