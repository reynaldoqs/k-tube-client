import styled from 'styled-components';

export const Header = styled.section`
    width: 100%;
    height: auto;
`;
export const Main = styled.main`
    width: 100%;
    padding: 8px ${(props) => props.theme.mainPadding};
    height: calc(100vh - ${(props) => props.theme.components.navBar.smHeight});
    max-height: calc(100vh - ${(props) => props.theme.components.navBar.smHeight});
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        height: calc(100vh - ${(props) => props.theme.components.navBar.mdHeight});
        max-height: calc(100vh - ${(props) => props.theme.components.navBar.mdHeight});
    }
`;
