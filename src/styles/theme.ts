/* eslint-disable functional/prefer-type-literal */
import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        readonly borderRadius: {
            readonly sm: string;
            readonly md: string;
            readonly lg: string;
        };
        readonly mainPadding: string;
        readonly colors: {
            readonly primary: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly secondary: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly accent: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly neutral: {
                readonly main: string;
                readonly dark: string;
                readonly darker: string;
                readonly light: string;
                readonly lighter: string;
                readonly lightest: string;
            };
            readonly sections: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly text: {
                readonly primary: {
                    readonly main: string;
                    readonly light: string;
                    readonly dark: string;
                };
            };
        };
        readonly components: {
            readonly navBar: {
                readonly smHeight: string;
                readonly mdHeight: string;
            };
            readonly container: {
                readonly md: string;
            };
        };
        readonly deviceBreakpoints: {
            readonly mobileL: string;
            readonly tablet: string;
            readonly laptop: string;
            readonly desktop: string;
        };
        readonly decoration: {
            readonly boxShadow: {
                readonly sm: string;
                readonly md: string;
                readonly lg: string;
            };
            readonly concaveBg: string;
            readonly gradientBg: string;
        };
    }
}

export const mainTheme: DefaultTheme = {
    borderRadius: {
        sm: '12px',
        md: '24px',
        lg: '40px',
    },
    mainPadding: '16px',
    colors: {
        primary: {
            main: '#26E8FE',
            light: 'white',
            dark: 'white',
        },
        secondary: {
            main: '#8142FF',
            light: 'white',
            dark: 'white',
        },
        accent: {
            main: '#FF4757',
            light: '#FF4757',
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
            main: '#212529',
            light: '#2B3740',
            dark: '#1C1F21',
        },
        text: {
            primary: {
                main: '#C0C5D4',
                light: '#E7EEF3',
                dark: '#979AB4',
            },
        },
    },
    components: {
        navBar: {
            smHeight: '56px',
            mdHeight: '64px',
        },
        container: {
            md: '768px',
        },
    },
    deviceBreakpoints: {
        mobileL: '(min-width: 425px)',
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1024px)',
        desktop: '(min-width: 1440px)',
    },
    decoration: {
        boxShadow: {
            sm:
                '6px 6px 14px 0 rgba(0, 0, 0, 0.25), -5px -5px 10px 0 rgba(200, 200, 200, 0.15), -5px -5px 10px 0 rgba(38, 232, 254, 0.16), 6px 6px 14px 0 rgba(129, 66, 255, .1);',
            md:
                '8px 8px 16px 0 rgba(0, 0, 0, 0.25), -6px -6px 12px 0 rgba(200, 200, 200, 0.15), -5px -5px 10px 0 rgba(38, 232, 254, 0.16), 6px 6px 14px 0 rgba(129, 66, 255, .1);',
            lg:
                '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3), -5px -5px 10px 0 rgba(38, 232, 254, 0.16), 6px 6px 14px 0 rgba(129, 66, 255, .1);',
        },
        concaveBg: 'linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(200, 200, 200, 0.25));',
        gradientBg:
            'linear-gradient(to right bottom, #292029, #2b232d, #2d2630, #302a34, #322d37, #322f39, #33313a, #33333c, #32343d, #32363d, #32373d, #32383d);',
    },
};
