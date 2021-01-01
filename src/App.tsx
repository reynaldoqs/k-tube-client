import React from 'react';
import { ThemeProvider } from 'styled-components';
import { globalHistory, Router } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';

import { Search, Home } from './views';
import { MainNavBar } from './containers';
import { GlobalStyle, mainTheme } from './styles';

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
                <MainNavBar />
                <Router>
                    <Home path="/" />
                    <Search path="/search" />
                </Router>
            </QueryParamProvider>
        </ThemeProvider>
    );
}

export default App;
