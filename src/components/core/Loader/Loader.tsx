import React, { CSSProperties, FC } from 'react';

import { CircularProgress } from '@mui/material';

interface Props {
  style?: CSSProperties;
}

/**
 * Loader Component
 * @param styles pass different styles to customize the loader
 * @returns
 */
const Loader: FC<Props> = ({ style }) => <CircularProgress style={style} />;

export default Loader;
