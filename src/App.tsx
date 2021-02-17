import React from 'react';
import { ThemeProvider } from 'styled-components';
import { globalHistory, Router } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';
import { Provider } from 'react-redux';

import { SearchView, HomeView, KaraokeView } from './views';
import { MainNavBar } from './containers';
import { GlobalStyle, mainTheme } from './styles';
import { ROUTES } from './constants';
import store from './store/store';

function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
                <GlobalStyle />
                <QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
                    {
                        //<MainNavBar />
                    }
                    <Router>
                        <HomeView path={ROUTES.home} />
                        <SearchView path={ROUTES.search} />
                        <KaraokeView path={ROUTES.karaoke} />
                    </Router>
                </QueryParamProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
