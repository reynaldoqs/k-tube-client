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

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CardSubtitle, CardInformation } from '../sharedElements';
import { RoundedButton, IconButton } from '../';

type Props = {
    readonly video: Video;
    readonly onPlayVideo: FuncParam<Video, void>;
    readonly onEnqueueVideo: FuncParam<Video, void>;
};

export const VideoListItem: React.FC<Props> = ({ video, onPlayVideo, onEnqueueVideo }: Props): React.ReactElement => {
    return (
        <VideoItemContainer>
            <VideoAvatarContainer>
                <VideoThumbnal loading="lazy" src={video.snippet.thumbnails.key.url} />
                <VideoMainOption onClick={() => onPlayVideo(video)}>
                    <IconButton size="lg" icon={faPlay} />
                </VideoMainOption>
            </VideoAvatarContainer>
            <InformationContainer>
                <CardSubtitle maxLines={2}>{video.snippet.title}</CardSubtitle>
                <CardInformation>duration 1:12 </CardInformation>
            </InformationContainer>
            <OptionsContainer>
                <RoundedButton onClick={() => onEnqueueVideo(video)} size="sm" flat icon={faPlus} />
                <RoundedButton onClick={() => onPlayVideo(video)} size="sm" icon={faPlay} />
            </OptionsContainer>
        </VideoItemContainer>
    );
};
