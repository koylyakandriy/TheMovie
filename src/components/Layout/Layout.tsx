import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Container } from '@mui/material';

const LayoutContainer = styled.div`
	margin: 20px auto;
	// 	padding: 0 20px;
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
	<Container component={LayoutContainer}>{children}</Container>
);

export default Layout;
