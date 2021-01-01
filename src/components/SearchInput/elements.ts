import styled from 'styled-components';
import { animated } from 'react-spring';

export const SearchInputContainer = styled(animated.div)`
    background-color: rgba(0, 0, 0, 1);
    position: absolute;
    width: calc(100% - 12px);
    height: 40px;
    border-radius: 20px;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    padding: 6px 10px;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        width: 580px;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

export const SearchIconContainer = styled(animated.div)``;

export const SearchInputEl = styled.input`
    border: none;
    width: calc(100% - 28px - 26px);
    background-color: transparent;
    color: ${(props) => props.theme.colors.text.primary.main};
    font-size: 1.1rem;
    margin-left: 8px;
    &:focus {
        outline: none;
        border: none;
    }
`;

export const SourceAvatar = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const SearchOption = styled.div`
    width: 26px;
    height: 26px;
    margin-left: 8px;
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
