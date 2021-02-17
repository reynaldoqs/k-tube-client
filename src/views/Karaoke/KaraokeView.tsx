import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { MainNavBar, VideoControlBar, VideoQueryResolver } from '../../containers';

import { Header } from '../elements';
import { KaraokeMain } from './elements';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const KaraokeView = (props: RouteComponentProps): React.ReactElement => {
    return (
        <>
            <Header>
                <MainNavBar />
            </Header>
            <KaraokeMain>
                <VideoQueryResolver />
                <VideoControlBar />
            </KaraokeMain>
        </>
    );
};
