import styled from 'styled-components';

export const VerticalVideoListContainer = styled.section`
    width: 100%;
    overflow-y: scroll;
    padding: 4px;
    scroll-snap-type: y mandatory;
    & > * {
        scroll-snap-align: start;
    }
    max-height: calc(100vh - ${(props) => props.theme.components.navBar.smHeight});
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        max-height: calc(100vh - ${(props) => props.theme.components.navBar.mdHeight});
    }
`;

export const VerticalList = styled.ul`
    width: 100%;
    & > li:not(:last-child) {
        margin: 6px auto;
    }
`;
