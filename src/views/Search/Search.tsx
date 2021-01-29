import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { SearchQueryResolver } from '../../containers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Search = (props: RouteComponentProps): React.ReactElement => {
    return <SearchQueryResolver />;
};
