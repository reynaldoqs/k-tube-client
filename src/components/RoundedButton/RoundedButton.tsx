import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RoundedButtonContainer } from './elements';

type Props = {
    readonly icon: IconDefinition;
    readonly onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const RoundedButton: React.FC<Props> = ({ icon, onClick }: Props): React.ReactElement => {
    return (
        <RoundedButtonContainer onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </RoundedButtonContainer>
    );
};
