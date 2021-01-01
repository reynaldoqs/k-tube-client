import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        background-color: ${(props) => props.theme.colors.sections.mainBackground};
        color: gray;
    }

    *,*:after,*:before{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
    }
    ul {
            list-style: none
    }
        
        ::-webkit-scrollbar {
            width: 12px;
    }
        
        ::-webkit-scrollbar-track {
            border-radius: 10px;
    }
        
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #363646; 
    }
        ::-webkit-scrollbar-thumb:window-inactive {
            background: #363646; 
    }
`;
