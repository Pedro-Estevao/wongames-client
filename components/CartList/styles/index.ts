'use client';

import styled from 'styled-components';
import { tint } from 'polished';

export const CartListContainer = styled.main`
	background: #fafafa;
	display: flex;
	flex-direction: column;
	align-self: start;
`;

export const Footer = styled.div`
	background: ${tint(0.2, '#EAEAEA')};
	color: #030517;
	font-weight: 600;
	font-size: 1.4rem;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 768px) {
		font-size: 1.6rem;
		padding: 2.4rem;
	}
`;

export const FooterLabel = styled.span``;

export const Total = styled.span`
	color: #f231a5;
`;
