'use client';

import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import { tint } from "polished";

export const PaymentFormContainer = styled.div``;

export const Body = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.white};
		padding: ${theme.spacings.small};
	`}
`;

export const Footer = styled.div`
	${({ theme }) => css`
		background: ${tint(0.2, theme.colors.lightGray)};
		color: ${theme.colors.black};
		font-weight: ${theme.font.bold};
		padding: ${theme.spacings.small};
		display: flex;
		align-items: center;

		${ButtonStyles.ButtonContainer} {
			padding-left: ${theme.spacings.xxsmall};
			padding-right: ${theme.spacings.xxsmall};
			outline: 0;
		}
	`}
`;

export const Error = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.red};
		font-size: ${theme.font.sizes.xsmall};
		padding-top: ${theme.spacings.xsmall};
		display: flex;
		align-items: center;
	`}
`;

export const FreeGames = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.black};
	`}
`;