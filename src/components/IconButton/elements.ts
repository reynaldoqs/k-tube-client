import styled, { DefaultTheme, css } from 'styled-components';

import { ButtonColorType, ButtonSize } from './IconButton';

type buttonStyleType = {
    readonly color: ButtonColorType;
    readonly bordered: boolean;
    readonly size: ButtonSize;
};

type ColorTypes = {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
};

type ButtonColors = {
    readonly default: ColorTypes;
    readonly accent: ColorTypes;
};

const getColor = (theme: DefaultTheme): ButtonColors => ({
    default: theme.colors.neutral,
    accent: theme.colors.accent,
});

export const IconButtonContainer = styled.button<buttonStyleType>`
    border: none;
    width: 34px;
    height: 34px;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    cursor: pointer;
    font-size: ${(props) => (props.bordered ? '0.9rem' : '1.1rem')};
    line-height: 32px;
    background-color: transparent;
    color: ${(props) => getColor(props.theme)[props.color].main};
    ${(props) =>
        props.bordered &&
        css`
            border: solid 2px ${getColor(props.theme)[props.color].main};
        `}

    &:focus {
        outline: none;
    }
    &:hover {
        color: ${(props) => getColor(props.theme)[props.color].light};
    }
`;
