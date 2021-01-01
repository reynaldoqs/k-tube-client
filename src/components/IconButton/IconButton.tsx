import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { IconButtonContainer } from './elements';

export type ButtonColorType = 'default' | 'accent';

type Props = {
    readonly icon: IconDefinition;
    readonly bordered?: boolean;
    readonly color?: ButtonColorType;
    readonly onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const IconButton: React.FC<Props> = ({
    icon,
    onClick,
    color = 'default',
    bordered = false,
}: Props): React.ReactElement => {
    return (
        <IconButtonContainer onClick={onClick} color={color} bordered={bordered}>
            <FontAwesomeIcon icon={icon} />
        </IconButtonContainer>
    );
};
