'use client';

import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { DefaultTheme } from "styled-components/dist/types";
import { ButtonTypes } from "..";

export type ContainerProps = {
	$size?: 'small' | 'medium' | 'large';
	$fullWidth?: boolean;
	$hasIcon?: boolean;
	$minimal?: boolean;
} & ButtonTypes;

const containerModifiers = {
	small: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
	`,
	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
	`,
	fullWidth: () => css`
		width: 100%;
	`,
	withIcon: (theme: DefaultTheme) => css`
		svg {
			width: 1.5rem;

			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`,
	minimal: (theme: DefaultTheme) => css`
		background: none;
		color: ${theme.colors.primary};

		&:hover {
			color: ${darken(0.1, theme.colors.primary)};
		}
	`,
	disabled: () => css`
		&:disabled {
			cursor: not-allowed;
			filter: saturate(30%);
		}
	`,
};

export const ButtonContainer = styled.button<ContainerProps>`
	${({ theme, $size, $fullWidth, $hasIcon, $minimal, disabled }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
		color: ${theme.colors.white};
		font-family: ${theme.font.family};
		border: 0;
		cursor: pointer;
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xxsmall};
		text-decoration: none;

		&:focus {
			box-shadow: 0 0 0 3px ${theme.colors.secondary};
		}

		&:hover {
			background: ${$minimal
				? 'none'
				: `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
		}

		${!!$size && containerModifiers[$size](theme)};
		${!!$fullWidth && containerModifiers.fullWidth()};
		${!!$hasIcon && containerModifiers.withIcon(theme)};
		${!!$minimal && containerModifiers.minimal(theme)};
		${disabled && containerModifiers.disabled()};
	`}
`;
