import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { VideoQueryResolver } from '../../containers';
import { PlayerBar } from '../../components/PlayerBar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Play = (props: RouteComponentProps): React.ReactElement => {
    return (
        <>
            <VideoQueryResolver />
            <PlayerBar />
        </>
    );
};
