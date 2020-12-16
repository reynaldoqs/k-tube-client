/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/prefer-type-literal */

import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        mainPadding: string;
        colors: {
            primary: {
                main: string;
                light: string;
                dark: string;
            };
            secondary: {
                main: string;
                light: string;
                dark: string;
            };
            accent: {
                main: string;
                light: string;
                dark: string;
            };
            neutral: {
                main: string;
                dark: string;
                darker: string;
                light: string;
                lighter: string;
                lightest: string;
            };
            sections: {
                mainBackground: string;
            };
        };
        devices: {
            mobileL: string;
            tablet: string;
            laptop: string;
            desktop: string;
        };
    }
}

export const mainTheme: DefaultTheme = {
    borderRadius: '8px',
    mainPadding: '16px',
    colors: {
        primary: {
            main: 'white',
            light: 'white',
            dark: 'white',
        },
        secondary: {
            main: 'white',
            light: 'white',
            dark: 'white',
        },
        accent: {
            main: 'white',
            light: 'white',
            dark: 'white',
        },
        neutral: {
            main: 'white',
            dark: 'white',
            darker: 'white',
            light: 'white',
            lighter: 'white',
            lightest: 'white',
        },
        sections: {
            mainBackground: '#252530',
        },
    },
    devices: {
        mobileL: '(min-width: 425px)',
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1024px)',
        desktop: '(min-width: 1440px)',
    },
};
