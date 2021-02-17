import React from 'react';
import { faPlus, faPause, faCog, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

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
import { FuncEmpty } from '../../types';

const img =
    'https://as01.epimg.net/epik/imagenes/2019/12/03/portada/1575384297_599943_1575384448_noticia_normal_recorte1.jpg';

type Props = {
    readonly onPlay?: FuncEmpty;
    readonly onPause?: FuncEmpty;
    readonly isPlaying?: boolean;
    readonly progress: number;
};

export const PlayerBar: React.FC<Props> = ({ onPlay, onPause, isPlaying, progress }: Props): React.ReactElement => {
    const fakeArr = [
        { title: 'esta loca esta tip', subtitle: 'this is my case' },
        { title: 'esta 6 esta tip', subtitle: 'this is my case' },
        { title: 'esta loca 2 tip', subtitle: 'this is my case' },
        { title: 'esta loca esta tip', subtitle: 'this is my case' },
        { title: 'esta 2 esta tip', subtitle: 'this is my case' },
        { title: 'esta 4 esta tip', subtitle: 'this is my case' },
    ];

    return (
        <PlayerBarContainer>
            <BarElementsContainer>
                <CurrentVideo>
                    <CurrentItems>
                        <SongCard title="audiman" subtitle="asda" imgSrc={img} extended />
                        <RoundedButton icon={faAngleDoubleLeft} />
                        <SongCard title="audiman" subtitle="asda" imgSrc={img} extended />
                    </CurrentItems>
                </CurrentVideo>
                <QueueVideos>
                    <QueList>
                        <SongCard title="1111" subtitle="asda" imgSrc={img} />
                        <SongCard title="222" subtitle="asda" imgSrc={img} />
                        <SongCard title="3333" subtitle="asda" imgSrc={img} />
                        <SongCard title="4444" subtitle="asda" imgSrc={img} />
                        <AddVideoOption>
                            <RoundedButton icon={faPlus} />
                        </AddVideoOption>
                    </QueList>
                </QueueVideos>
                <VideoSettings>
                    <RoundedButton icon={faCog} />
                    <RoundedButton icon={faPause} />
                </VideoSettings>
            </BarElementsContainer>
            <ProgressBar progress={progress} />
        </PlayerBarContainer>
    );
};
