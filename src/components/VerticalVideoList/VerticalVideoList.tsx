import React from 'react';

import { map } from 'ramda';

import { Video } from '../../types';
import { renderVideoItem, Container } from '../';
import { VerticalVideoListContainer } from './elements';

type Props = {
    readonly videos: readonly Video[];
};

export const VerticalVideoList: React.FC<Props> = ({ videos }: Props): React.ReactElement => {
    const displayVideos = map(renderVideoItem);
    return (
        <Container>
            <VerticalVideoListContainer>{displayVideos(videos)}</VerticalVideoListContainer>
        </Container>
    );
};
