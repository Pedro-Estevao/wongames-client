'use client';

import styled, { css } from 'styled-components';
import { tint } from 'polished';
import * as EmptyStyles from '@/components/Empty/styles';
import media from "styled-media-query";

type CartListContainerProps = {
	$isEmpty: boolean;
};

export const CartListContainer = styled.main<CartListContainerProps>`
	${({ theme, $isEmpty }) => css`
		background-color: ${theme.colors.white};
		display: flex;
		flex-direction: column;
		align-self: start;

		${$isEmpty &&
		css`
			${EmptyStyles.EmptyContainer} {
				padding-bottom: ${theme.spacings.medium};
			}

			${EmptyStyles.EmptyImage} {
				max-width: 20rem;
			}

			${EmptyStyles.Title} {
				font-size: ${theme.font.sizes.large};
			}

			${EmptyStyles.Description} {
				color: ${theme.colors.black};
        		font-size: ${theme.font.sizes.medium};
			}
		`}
	`}
`;

export const Loading = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.white};
		height: 40rem;
		min-width: 56rem;

		svg {
			height: 10rem;
			width: 10rem;
		}
	`}
`;

export const GamesList = styled.div`
	max-height: 40rem;
	overflow-y: auto;
`;

export const Footer = styled.div`
	${({ theme }) => css`
		background: ${tint(0.2, theme.colors.lightGray)};
		color: ${theme.colors.black};
		font-weight: ${theme.font.bold};
		font-size: ${theme.font.sizes.small};
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.medium};
			padding: ${theme.spacings.small};
		`}
	`}
`;

export const FooterLabel = styled.span``;

export const Total = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primary};
	`}
`;
