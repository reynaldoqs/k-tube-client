import styled from 'styled-components';
import { VideoPlayerProps } from './VideoPlayer';

export const VideoPlayerContainer = styled.section`
    position: relative;
    height: 100%;
`;

export const VideoPlayerLayer = styled.div<Pick<VideoPlayerProps, 'playing'>>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in-out;
    background-color: ${(props) => (props.playing ? 'transparent' : 'rgba(0, 0, 0, 0.6)')};
    backdrop-filter: ${(props) => (props.playing ? 'none' : 'blur(15px)')};
`;
