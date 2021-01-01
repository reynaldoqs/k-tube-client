import React from 'react';
import { navigate as onNavigate } from '@reach/router';

import { NavBar } from '../../components';
import { SearchBox } from '../SearchBox';

export function MainNavBar(): React.ReactElement {
    // eslint-disable-next-line functional/functional-parameters
    const navigationHandler = (): void => {
        //open search menu then navitate
        //change name
        console.log('navigate search');
        onNavigate('/search');
    };

    return (
        <>
            <NavBar>
                <>
                    <SearchBox onNavigateToSearch={navigationHandler} />
                </>
            </NavBar>
        </>
    );
}
