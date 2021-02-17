import styled from 'styled-components';

export const VerticalVideoListContainer = styled.section`
    width: 100%;
    height: 100%;
`;

export const VerticalList = styled.ul`
    width: 100%;
    margin-top: 10px;
    & > li:not(:last-child) {
        margin-bottom: 8px;
    }
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        & > li:not(:last-child) {
            margin-bottom: 10px;
        }
    }
`;
