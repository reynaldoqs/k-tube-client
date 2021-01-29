import React from 'react';
import { navigate as onNavigate } from '@reach/router';

import { NavBar } from '../../components';
import { SearchBox } from '../SearchBox';

export function MainNavBar(): React.ReactElement {
    const navigationHandler = (): Promise<void> => onNavigate('/search');
    return (
        <NavBar>
            <SearchBox navigateToSearch={navigationHandler} />
        </NavBar>
    );
}
