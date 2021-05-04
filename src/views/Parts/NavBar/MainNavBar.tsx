import React from 'react';
import { navigate as onNavigate } from '@reach/router';

import { NavBar, TextButton } from '../../../components';
import { SearchBox } from '../../../containers/SearchBox';

export function MainNavBar(): React.ReactElement {
    const navigationHandler = (): Promise<void> => onNavigate('/search');
    return (
        <NavBar>
            <>
                <TextButton>Home</TextButton>
                <TextButton>Karaoke</TextButton>
                <SearchBox navigateToSearch={navigationHandler} />
            </>
        </NavBar>
    );
}
