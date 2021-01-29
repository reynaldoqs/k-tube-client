import styled from 'styled-components';

type TextProps = {
    readonly maxLines?: number;
};

export const Subtitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    padding: 24px 0 14px 0;
    color: ${(props) => props.theme.colors.text.primary.light};
`;

export const CardSubtitle = styled.h3<TextProps>`
    color: ${(props) => props.theme.colors.text.primary.light};
    font-size: 0.8rem;
    font-weight: 400;
    margin: 2px 0;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.maxLines ? props.maxLines : 'none')};
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        font-size: 0.9rem;
    }
`;

export const CardInformation = styled.p`
    color: ${(props) => props.theme.colors.text.primary.dark};
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 2px 0;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        font-size: 0.95rem;
    }
`;

export const SmallText = styled.small`
    color: ${(props) => props.theme.colors.text.primary.dark};
    font-size: 0.75rem;
    @media ${(props) => props.theme.deviceBreakpoints.tablet} {
        font-size: 0.8rem;
    }
`;
