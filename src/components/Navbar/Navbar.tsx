import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../Logo/Logo';

import { navLinks } from './constants';

export const NavbarContainer = styled.nav`
	display: flex;
	height: 40px;
`;

export const NavLinks = styled.ul`
	align-items: center;
	display: flex;
	margin-left: auto;
`;

export const NavLinkItem = styled.li`
	margin-left: 14px;
`;

const Navbar = () => (
	<NavbarContainer>
		<Link to='/'>
			<Logo />
		</Link>
		<NavLinks>
			{navLinks.map(({ path, name }) => (
				<NavLinkItem key={path}>
					<NavLink to={path}>{name}</NavLink>
				</NavLinkItem>
			))}
		</NavLinks>
	</NavbarContainer>
);

export default Navbar;
