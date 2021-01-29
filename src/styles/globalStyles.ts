import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        background-color: ${(props) => props.theme.colors.sections.darkBackground};
        color: gray;
    }

    *,*:after,*:before{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
    }
    ::placeholder {
        color: ${(props) => props.theme.colors.text.primary.dark};
        opacity: 1;
    }
    ul {
        list-style: none
    }
        
    ::-webkit-scrollbar {
        width: 10px;
    }
        
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
        
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${(props) => props.theme.colors.sections.mainBackground};
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: ${(props) => props.theme.colors.sections.mainBackground};
    }
`;
