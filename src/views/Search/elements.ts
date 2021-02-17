import styled from 'styled-components';
import { Main } from '../elements';

export const SearchMain = styled(Main)`
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    & > * {
        scroll-snap-align: start;
    }
`;
