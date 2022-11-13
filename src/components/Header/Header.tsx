import React from 'react';

import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';

import { HeaderContainer } from './Header.styled';

const Header = () => (
	<HeaderContainer>
		<Layout>
			<Navbar />
		</Layout>
	</HeaderContainer>
);

export default Header;
