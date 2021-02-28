import React from 'react';
import { SongCardImg, SongCardContainer, SongCardContent, SongCardText } from './elements';

type Props = {
    readonly title: string;
    readonly subtitle: string;
    readonly imgSrc: string;
    readonly extended?: boolean;
};

export const SongCard: React.FC<Props> = ({ title, subtitle, imgSrc, extended = false }: Props): React.ReactElement => {
    return (
        <SongCardContainer>
            <SongCardContent isOpen={extended}>
                <SongCardText isOpen={extended}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </SongCardText>
            </SongCardContent>
            <SongCardImg src={imgSrc} />
        </SongCardContainer>
    );
};
