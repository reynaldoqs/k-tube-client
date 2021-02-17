import React from 'react';
import { ProgressBarContainer } from './elements';

type Props = {
    readonly progress: number;
};

export const ProgressBar: React.FC<Props> = ({ progress }: Props): React.ReactElement => {
    return <ProgressBarContainer progress={progress} />;
};
