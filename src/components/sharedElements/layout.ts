import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: ${(props) => props.theme.components.container.md};
    margin: 0 auto;
`;
