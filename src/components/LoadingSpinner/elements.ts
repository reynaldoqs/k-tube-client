import styled, { keyframes } from 'styled-components';

const rotatePlane = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100px;
    display: grid;
    place-content: center;
`;

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary.main};
    margin: 100px auto;
    animation: ${rotatePlane} 1.2s infinite ease-in-out;
`;
