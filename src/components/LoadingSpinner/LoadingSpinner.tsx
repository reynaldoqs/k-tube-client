import React from 'react';
import { LoadingContainer, Spinner } from './elements';

export const LoadingSpinner: React.FC = (): React.ReactElement => (
    <LoadingContainer>
        <Spinner />
    </LoadingContainer>
);

export const RenderSpinner = (): React.ReactElement => <LoadingSpinner />;
