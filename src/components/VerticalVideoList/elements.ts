import styled from 'styled-components';

export const VerticalVideoListContainer = styled.ul`
    width: 100%;
    & > li:not(:last-child) {
        border-bottom: solid 1px #212121;
    }
`;
