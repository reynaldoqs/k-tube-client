import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { MainNavBar, SearchQueryResolver } from '../../containers';
import { Header } from '../elements';
import { SearchMain } from './elements';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SearchView = (props: RouteComponentProps): React.ReactElement => {
    return (
        <>
            <Header>
                <MainNavBar />
            </Header>
            <SearchMain>
                <SearchQueryResolver />
            </SearchMain>
        </>
    );
};
