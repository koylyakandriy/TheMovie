import React, { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
	// const Layout = ({ children }: { children: ReactNode }) => (
	<main>
		<div>Sidebar</div>
		<div>{children}</div>
	</main>
);

export default Layout;
