import styled from 'styled-components';

export const CardSubtitle = styled.h3`
    color: ${(props) => props.theme.colors.text.primary.light};
    font-size: 0.9rem;
    font-weight: 400;
    margin: 2px 0;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        font-size: 1rem;
    }
`;

export const SmallText = styled.small`
    color: ${(props) => props.theme.colors.text.primary.dark};
    font-size: 0.75rem;
    text-transform: capitalize;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        font-size: 0.8rem;
    }
`;
