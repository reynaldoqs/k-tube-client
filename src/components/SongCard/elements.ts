import styled from 'styled-components';

const imgh = '70px',
    imgw = '70px',
    conw = '220px';

type ToggleProps = {
    readonly isOpen: boolean;
};

export const SongCardContainer = styled.article`
    width: ${imgw};
    height: ${imgh};
    position: relative;
    border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const SongCardContent = styled.div<ToggleProps>`
    height: ${imgh};
    width: ${(props) => (props.isOpen ? conw : imgw)};
    overflow: hidden;
    transition: width 0.1s ease-out;
    background-color: ${(props) => props.theme.colors.sections.lightBackground};
    border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const SongCardText = styled.section<ToggleProps>`
    width: 100%;
    height: 100%;
    margin-left: ${imgw};
    padding: 12px 10px;
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    & > h3 {
        max-width: calc(${conw} - ${imgw} - 20px);
        font-size: 12px;
        line-height: 14px;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: ${(props) => props.theme.colors.text.primary.light};
    }
    & > h4 {
        max-width: calc(${conw} - ${imgw} - 20px);
        font-size: 10px;
        line-height: 12px;
        margin-top: 3px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: ${(props) => props.theme.colors.text.primary.dark};
    }
`;

export const SongCardImg = styled.img`
    width: ${imgw};
    height: ${imgh};
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius.sm};
`;
