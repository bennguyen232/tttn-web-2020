import React, {FC} from 'react';
import {useGlobalStyles} from '../utilities';

export const OpenIssuesScreen: FC = () => {
  const globals = useGlobalStyles();

  return <h1 className={globals.p2}>OpenIssuesScreen</h1>;
};
export default OpenIssuesScreen;
