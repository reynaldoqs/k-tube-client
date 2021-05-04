import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { TextButtonContainer } from './elements';

type TextButtonProps = {
    readonly children: string;
    readonly icon?: IconDefinition;
};

export const TextButton: React.FC<TextButtonProps> = ({ children, icon }: TextButtonProps) => {
    return <TextButtonContainer>{children}</TextButtonContainer>;
};
