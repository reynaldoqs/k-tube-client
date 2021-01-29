import styled from 'styled-components';

export const PlayerBarContainer = styled.section`
    width: 100%;
    height: 100px;
    background-image: linear-gradient(90deg, #33286e 0, #10111d 30%, #10111d 80%, #03040d 100%);
    position: absolute;
    bottom: 0;
    &:before {
        content: '';
        width: 100%;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(8px);
        position: absolute;
        left: 0;
    }
`;
