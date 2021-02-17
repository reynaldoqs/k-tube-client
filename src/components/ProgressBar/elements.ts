import styled from 'styled-components';

type ProgressBarProps = {
    readonly progress: number;
};

export const ProgressBarContainer = styled.div<ProgressBarProps>`
    position: absolute;
    width: 100%;
    height: 8px;
    z-index: 1;
    position: relative;
    background-color: ${(props) => props.theme.colors.sections.lightBackground};
    &:before {
        content: '';
        width: ${(props) => props.progress}%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.primary.main};
    }
`;
