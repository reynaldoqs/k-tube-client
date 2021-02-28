import React from 'react';
import { faPlus, faPause, faPlay, faCog, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { map, slice } from 'ramda';

import { ProgressBar } from '../ProgressBar';
import { SongCard } from '../SongCard';
import { RoundedButton } from '../RoundedButton';
import {
    PlayerBarContainer,
    QueList,
    BarElementsContainer,
    CurrentVideo,
    QueueVideos,
    VideoSettings,
    AddVideoOption,
    CurrentItems,
} from './elements';
import { FuncEmpty, Video } from '../../types';

const img =
    'https://as01.epimg.net/epik/imagenes/2019/12/03/portada/1575384297_599943_1575384448_noticia_normal_recorte1.jpg';

type Props = {
    readonly onPlay: FuncEmpty;
    readonly onPause?: FuncEmpty;
    readonly onDequeue: FuncEmpty;
    readonly isPlaying?: boolean;
    readonly progress: number;
    readonly videosQueue: readonly Video[];
    readonly currentVideo: Video | null;
};

export const PlayerBar: React.FC<Props> = ({
    onPlay,
    onPause,
    onDequeue,
    isPlaying = false,
    progress,
    videosQueue,
    currentVideo,
}: Props): React.ReactElement => {
    const hasNextSong = videosQueue.length > 0;
    const hasQueue = videosQueue.length > 1;
    const renderVideo = (video: Video): React.ReactElement => (
        <SongCard
            key={video.id.videoId}
            title={video.snippet.title}
            subtitle="asda"
            imgSrc={video.snippet.thumbnails.key.url}
        />
    );
    const sliceAndMapVideos = map(renderVideo, slice(1, 5, videosQueue));

    return (
        <PlayerBarContainer>
            <BarElementsContainer>
                <CurrentVideo>
                    <CurrentItems>
                        {currentVideo && (
                            <SongCard
                                title={currentVideo.snippet.title}
                                subtitle="its for u k"
                                imgSrc={currentVideo.snippet.thumbnails.key.url}
                                extended
                            />
                        )}
                        {hasNextSong && <RoundedButton onClick={onDequeue} icon={faAngleDoubleLeft} />}
                        {hasNextSong && (
                            <SongCard
                                title={videosQueue[0].snippet.title}
                                subtitle="asda"
                                imgSrc={videosQueue[0].snippet.thumbnails.key.url}
                                extended
                            />
                        )}
                    </CurrentItems>
                </CurrentVideo>
                <QueueVideos>
                    <QueList>
                        {hasQueue && sliceAndMapVideos}
                        <AddVideoOption>
                            <RoundedButton icon={faPlus} />
                        </AddVideoOption>
                    </QueList>
                </QueueVideos>
                <VideoSettings>
                    <RoundedButton icon={faCog} />
                    <RoundedButton icon={isPlaying ? faPause : faPlay} onClick={isPlaying ? onPause : onPlay} />
                </VideoSettings>
            </BarElementsContainer>
            <ProgressBar progress={progress} />
        </PlayerBarContainer>
    );
};
