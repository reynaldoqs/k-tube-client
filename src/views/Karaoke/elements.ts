import styled from 'styled-components';
import { Main } from '../elements';

export const KaraokeMain = styled(Main)`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const Player = styled.section`
    flex-grow: 1;
    overflow-y: hidden;
`;

export const Controls = styled.section`
    margin-top: auto;
`;
