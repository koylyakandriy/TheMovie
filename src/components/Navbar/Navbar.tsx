import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import MUIComponents from '../materialUIComponents';

import { navLinks } from './constants';
import { NavbarContainer } from './Navbar.styled';

const Navbar: FC = () => (
	<NavbarContainer>
		<Link to='/'>
			<Logo />
		</Link>
		<MUIComponents.Box marginLeft='auto'>
			{navLinks.map(({ path, name }) => (
				<MUIComponents.Button key={path}>
					<NavLink to={path}>{name}</NavLink>
				</MUIComponents.Button>
			))}
		</MUIComponents.Box>
	</NavbarContainer>
);

export default Navbar;
