import styled from 'styled-components';

const itemHeight = '50px';
const vaWidth = '80px';
const optWidth = '35px';

export const VideoItemContainer = styled.li`
    padding: 20px 12px;
    display: flex;
`;

export const VideoAvatarContainer = styled.div`
    width: ${vaWidth};
    height: ${itemHeight};
`;

export const VideoThumbnal = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border-radius: 12px;
`;

export const InformationContainer = styled.div`
    padding: 6px 14px;
    width: calc(100% - ${vaWidth} - ${optWidth});
`;

export const OptionsContainer = styled.div`
    opacity: 0;
    width: ${optWidth};
    height: ${itemHeight};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${VideoItemContainer}:hover & {
        opacity: 1;
    }
`;
