import React, { FC, ReactNode } from 'react';

import MUIComponents from '../materialUIComponents';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
	<MUIComponents.Container sx={{ marginY: '20px' }}>{children}</MUIComponents.Container>
);

export default Layout;
