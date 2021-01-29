import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    background-color: ${(props) => props.theme.colors.sections.darkBackground};
    height: ${(props) => props.theme.components.navBar.smHeight};
    padding: 8px ${(props) => props.theme.mainPadding};
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        height: ${(props) => props.theme.components.navBar.mdHeight};
    }
`;

export const NavBarLeftElements = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavBarRightElements = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavBarCenterElements = styled.section`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    & > *:not(:first-child):not(:last-child) {
        margin: 0 10px;
    }
`;
