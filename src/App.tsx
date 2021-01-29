import React from 'react';
import { ThemeProvider } from 'styled-components';
import { globalHistory, Router } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';

import { Search, Home, Play } from './views';
import { MainNavBar } from './containers';
import { GlobalStyle, mainTheme } from './styles';
import { ROUTES } from './constants';

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
                <MainNavBar />
                <Router>
                    <Home path="/" />
                    <Search path={ROUTES.search} />
                    <Play path={ROUTES.player} />
                </Router>
            </QueryParamProvider>
        </ThemeProvider>
    );
}

export default App;
