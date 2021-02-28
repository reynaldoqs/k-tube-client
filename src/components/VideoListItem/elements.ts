import styled from 'styled-components';

const itemHeight = '100px';
const AVATAR_SM_SIZE = '74px';
const AVATAR_MD_SIZE = '78px';
const optWidth = '55px';

export const VideoItemContainer = styled.li`
    width: 100%;
    max-width: ${(props) => props.theme.components.container.md};
    margin: 26px auto;
    display: flex;
    padding: 0;
    scroll-snap-align: start;
    box-shadow: ${(props) => props.theme.decoration.boxShadow.md};
    border-radius: ${(props) => props.theme.borderRadius.md};
    background-image: ${(props) => props.theme.decoration.gradientBg};
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 0px;
        margin: 30px auto;
    }
`;

export const VideoAvatarContainer = styled.div`
    width: ${AVATAR_SM_SIZE};
    height: ${AVATAR_SM_SIZE};
    margin-top: calc((${itemHeight} - ${AVATAR_SM_SIZE}) / 2);
    margin-left: calc((${itemHeight} - ${AVATAR_SM_SIZE}) / 2);
    position: relative;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
    border-radius: ${(props) => props.theme.borderRadius.md};
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        width: ${AVATAR_MD_SIZE};
        height: ${AVATAR_MD_SIZE};
        margin-top: calc((${itemHeight} - ${AVATAR_MD_SIZE}) / 2);
        margin-left: calc((${itemHeight} - ${AVATAR_MD_SIZE}) / 2);
    }
`;

export const VideoThumbnal = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadius.md};
`;

export const VideoMainOption = styled.div`
    width: 100%;
    height: 100%;
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
    width: calc(100% - ${AVATAR_MD_SIZE} - ${optWidth});
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding: 10px 20px;
    }
`;

export const OptionsContainer = styled.div`
    opacity: 1;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: ${optWidth};
    height: ${itemHeight};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        padding-right: 20px;
    }
`;
