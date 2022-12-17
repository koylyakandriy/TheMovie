import styled from 'styled-components';

import { colors } from '@mui/material';

export const NavbarContainer = styled.nav`
	display: flex;
	height: 40px;

	& a {
		color: ${colors.common.black};
		transition: all 0.2s ease;

		&:hover {
			color: ${colors.cyan['700']};
		}
	}
`;
