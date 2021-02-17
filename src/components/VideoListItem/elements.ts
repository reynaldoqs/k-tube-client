import styled from 'styled-components';

const itemHeight = '100px';
const vaWidthSm = '100px';
const vaWidthMd = '120px';
const optWidth = '55px';

export const VideoItemContainer = styled.li`
    width: 100%;
    max-width: ${(props) => props.theme.components.container.md};
    margin: 0 auto;
    padding: 0px;
    display: flex;
    scroll-snap-align: start;
    background-color: ${(props) => props.theme.colors.sections.mainBackground};
    border-radius: ${(props) => props.theme.borderRadius.md};
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 0px;
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
    border-radius: ${(props) => props.theme.borderRadius.md};
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
    border-radius: ${(props) => props.theme.borderRadius.md};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
`;

export const InformationContainer = styled.div`
    padding: 8px 12px;
    width: calc(100% - ${vaWidthSm} - ${optWidth});
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 10px 20px;
    }
`;

export const OptionsContainer = styled.div`
    opacity: 0;
    padding-right: 10px;
    width: ${optWidth};
    height: ${itemHeight};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding-right: 20px;
    }
`;
