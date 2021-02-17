import styled from 'styled-components';

export const RoundedButtonContainer = styled.button`
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: ${(props) => props.theme.colors.sections.lightBackground};
    color: ${(props) => props.theme.colors.text.primary.main};
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${(props) => props.theme.colors.text.primary.light};
    }
`;
