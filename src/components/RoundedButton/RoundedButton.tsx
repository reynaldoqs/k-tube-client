import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RoundedButtonContainer } from './elements';

export type Props = {
    readonly icon: IconDefinition;
    readonly size?: 'md' | 'sm' | 'lg';
    readonly flat?: boolean;
    readonly onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const RoundedButton: React.FC<Props> = ({
    icon,
    onClick,
    flat = false,
    size = 'md',
}: Props): React.ReactElement => {
    return (
        <RoundedButtonContainer onClick={onClick} size={size} flat={flat}>
            <FontAwesomeIcon icon={icon} />
        </RoundedButtonContainer>
    );
};
