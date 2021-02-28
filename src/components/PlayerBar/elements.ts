import styled from 'styled-components';

const VIDEO_CARD_WIDTH = 70;

export const PlayerBarContainer = styled.section`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.sections.main};
    background-image: ${(props) => props.theme.decoration.gradientBg};
`;

export const BarElementsContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 0 ${(props) => props.theme.mainPadding};
    display: flex;
    align-items: center;
`;

export const CurrentVideo = styled.div`
    flex: 1;
    display: flex;
`;

export const CurrentItems = styled.div`
    width: 100px;
    position: relative;
    display: flex;
    align-items: center;
    height: ${VIDEO_CARD_WIDTH + 'px'};
    & > article {
        position: absolute;
    }
    & > article:first-of-type {
        left: 0;
    }
    & > article:last-of-type {
        left: 350px;
    }
    & > button {
        position: absolute;
        left: 260px;
    }
`;

export const QueueVideos = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
`;

export const QueList = styled.div`
    width: 300px;
    position: relative;
    height: ${VIDEO_CARD_WIDTH + 'px'};
    & > article {
        position: absolute;
    }
    & > article:nth-child(1) {
        left: 0;
        z-index: 4;
    }
    & > article:nth-child(2) {
        left: 35px;
        z-index: 3;
    }
    & > article:nth-child(3) {
        left: 70px;
        z-index: 2;
    }
    & > article:nth-child(4) {
        left: 105px;
        z-index: 1;
    }
`;

export const VideoSettings = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    & > button:not(:last-child) {
        margin-right: 30px;
    }
`;

export const AddVideoOption = styled.div`
    width: ${VIDEO_CARD_WIDTH + 'px'};
    height: ${VIDEO_CARD_WIDTH + 'px'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 180px;
    border-radius: ${(props) => props.theme.borderRadius.sm};
`;
