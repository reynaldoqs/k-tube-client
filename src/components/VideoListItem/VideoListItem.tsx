import React from 'react';

import { FuncParam, Video } from '../../types';
import {
    VideoItemContainer,
    VideoAvatarContainer,
    VideoThumbnal,
    InformationContainer,
    OptionsContainer,
    VideoMainOption,
} from './elements';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { CardSubtitle, CardInformation } from '../sharedElements';
import { IconButton } from '../IconButton';

type Props = {
    readonly video: Video;
    readonly onSelectVideo: FuncParam<string, void>;
};

export const VideoListItem: React.FC<Props> = ({ video, onSelectVideo }: Props): React.ReactElement => {
    return (
        <VideoItemContainer>
            <VideoAvatarContainer>
                <VideoThumbnal loading="lazy" src={video.snippet.thumbnails.key.url} />
                <VideoMainOption onClick={() => onSelectVideo(video.id.videoId)}>
                    <IconButton size="lg" icon={faPlay} />
                </VideoMainOption>
            </VideoAvatarContainer>
            <InformationContainer>
                <CardSubtitle maxLines={2}>{video.snippet.title}</CardSubtitle>
                <CardInformation>duration 1:12 </CardInformation>
            </InformationContainer>
            <OptionsContainer>
                <IconButton color="accent" bordered icon={faPlay} />
            </OptionsContainer>
        </VideoItemContainer>
    );
};

export const renderVideoItem = (video: Video, onSelectVideo: FuncParam<string, void>): React.ReactElement => (
    <VideoListItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />
);
