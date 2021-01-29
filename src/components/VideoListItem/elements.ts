import styled from 'styled-components';

const itemHeight = '100px';
const vaWidthSm = '100px';
const vaWidthMd = '120px';
const optWidth = '35px';

export const VideoItemContainer = styled.li`
    width: 100%;
    max-width: ${(props) => props.theme.components.container.md};
    margin: 0 auto;
    padding: 8px 10px;
    display: flex;
    scroll-snap-align: start;
    background-color: ${(props) => props.theme.colors.sections.mainBackground};
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 12px 16px;
    }
`;

export const VideoAvatarContainer = styled.div`
    width: ${vaWidthSm};
    height: ${itemHeight};
    position: relative;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        width: ${vaWidthMd};
    }
`;

export const VideoThumbnal = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const VideoMainOption = styled.div`
    width: 101%;
    height: 101%;
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border-radius: ${(props) => props.theme.borderRadius.sm};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
`;

export const InformationContainer = styled.div`
    padding: 6px 12px;
    width: calc(100% - ${vaWidthSm} - ${optWidth});
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 6px 20px;
    }
`;

export const OptionsContainer = styled.div`
    opacity: 0;
    width: ${optWidth};
    height: ${itemHeight};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
`;
