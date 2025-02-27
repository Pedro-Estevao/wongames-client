'use client';

import styled, { css } from 'styled-components';
import * as RibbonStyles from '@/components/Ribbon/styles';
import media from "styled-media-query";

export const GameInfoContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		background: ${theme.colors.white};
		padding: ${theme.spacings.small};

		${RibbonStyles.RibbonContainer} {
		right: -1rem;

		&:before {
			border-right-width: 1rem;
		}
		}

		${media.greaterThan('medium')`
			${RibbonStyles.RibbonContainer} {
				right: ${theme.spacings.small};
				top: ${theme.spacings.small};
				font-size: ${theme.font.sizes.large};

				&:before {
					border: none;
				}
			}
		`}
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.gray};
		margin-bottom: ${theme.spacings.small};

		${media.greaterThan('medium')`
			max-width: 77rem;
		`}
	`}
`;

export const ButtonsWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;

		> button {
			width: 100%;
			margin-bottom: ${theme.spacings.xxsmall};
		}

		${media.greaterThan('medium')`
			flex-direction: row-reverse;

			> button {
				width: initial;
				margin-bottom: 0;
			}
		`}
	`}
`;
