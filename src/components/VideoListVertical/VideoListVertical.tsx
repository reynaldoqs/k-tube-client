import React from 'react';
import { map } from 'ramda';

import { FuncParam, Video } from '../../types';
import { Container, renderVideoItem, Subtitle } from '..';
import { VerticalVideoListContainer, VerticalList } from './elements';

type Props = {
    readonly videos: readonly Video[];
    readonly onSelectVideo: FuncParam<string, void>;
};

export const VideoListVertical: React.FC<Props> = ({ videos, onSelectVideo }: Props): React.ReactElement => {
    const renderVideos = map((video: Video) => renderVideoItem(video, onSelectVideo));
    return (
        <VerticalVideoListContainer>
            <Container>
                <Subtitle>Resultados</Subtitle>
            </Container>
            <VerticalList>{renderVideos(videos)}</VerticalList>
        </VerticalVideoListContainer>
    );
};
