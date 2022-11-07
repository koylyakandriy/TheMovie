import styled from 'styled-components';

import { Rating } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export const CardContainer = styled.div`
	border: 1px black solid;
	border-radius: 16px;
	margin-bottom: 16px;
	overflow: hidden;
	width: 280px;
`;

export const CardImage = styled.img`
	height: ${({ height = 380 }) => `${height}px`};
	object-fit: ${({ objectFit = 'fill' }: { objectFit: string }) => `${objectFit}`};
	position: relative;
	width: 100%;
`;

export const CardBody = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const CardTitle = styled.h2`
	color: black;
	margin-bottom: 10px;
	padding: 0 10px;
	text-align: center;
`;

export const CardDescription = styled.span`
	color: black;
	padding: 0 10px;
`;
