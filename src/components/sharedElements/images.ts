import styled from 'styled-components';

export const LogoContainer = styled.img`
    height: 20px;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        height: 22px;
    }
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        width: 35px;
        height: 35px;
    }
`;
