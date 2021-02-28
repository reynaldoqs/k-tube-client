import styled from 'styled-components';
import { Props } from './RoundedButton';

export const RoundedButtonContainer = styled.button<Pick<Props, 'size' | 'flat'>>`
    border: none;
    width: ${(props) => (props.size === 'sm' ? '35px' : '45px')};
    height: ${(props) => (props.size === 'sm' ? '35px' : '45px')};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => (props.size === 'sm' ? '14px' : '20px')};
    background-color: ${(props) => (props.flat ? 'transparent' : props.theme.colors.sections.dark)};
    border: ${(props) => (props.flat ? 'none' : `solid 2px ${props.theme.colors.sections.light}`)};
    color: ${(props) => props.theme.colors.primary.main};
    box-shadow: ${(props) => (props.flat ? 'none' : props.theme.decoration.boxShadow.sm)};
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${(props) => props.theme.colors.primary.light};
    }
`;
