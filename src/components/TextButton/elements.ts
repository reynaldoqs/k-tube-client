import styled from 'styled-components';

export const TextButtonContainer = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.02rem;
    color: ${(props) => props.theme.colors.text.primary.main};
    &:focus {
        outline: none;
    }
`;
