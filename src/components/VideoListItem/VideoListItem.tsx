import React from 'react';
import { defaultTo, prop, path } from 'ramda';

import { Video } from '../../types';
import {
    VideoItemContainer,
    VideoAvatarContainer,
    VideoThumbnal,
    InformationContainer,
    OptionsContainer,
} from './elements';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { CardSubtitle, SmallText } from '../sharedElements';
import { IconButton } from '../IconButton';

type Props = {
    readonly video: Video;
};

export const VideoListItem: React.FC<Props> = ({ video }: Props): React.ReactElement => {
    const getVideoSrc = path(['snippet', 'thumbnails', 'key', 'url']);
    //const getVideoSrc = prop('snippet.thumbnals.key.url', video);
    const getVideoThumbnail = defaultTo('audiman', getVideoSrc);
    return (
        <VideoItemContainer>
            <VideoAvatarContainer>
                <VideoThumbnal src={video.snippet.thumbnails.key.url} />
            </VideoAvatarContainer>
            <InformationContainer>
                <CardSubtitle>{video.snippet.title}</CardSubtitle>
                <SmallText>duration 1:12 </SmallText>
            </InformationContainer>
            <OptionsContainer>
                <IconButton color="accent" bordered icon={faPlay} />
            </OptionsContainer>
        </VideoItemContainer>
    );
};

export const renderVideoItem = (video: Video): React.ReactElement => (
    <VideoListItem key={video.id.videoId} video={video} />
);
