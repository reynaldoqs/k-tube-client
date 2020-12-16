import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SearchBox } from './containers';
import { GlobalStyle, mainTheme } from './styles';

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <SearchBox />
        </ThemeProvider>
    );
}

export default App;
