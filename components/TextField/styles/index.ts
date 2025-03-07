'use client';

import styled, { css } from 'styled-components';
import { DefaultTheme } from "styled-components/dist/types";

const containerModifiers = {
	error: (theme: DefaultTheme) => css`
		${InputWrapper} {
			border-color: ${theme.colors.red};
		}

		${Icon},
		${Label} {
			color: ${theme.colors.red};
		}
	`,
	disabled: (theme: DefaultTheme) => css`
		${Label},
		${Input},
        ${Icon} {
			cursor: not-allowed;
			color: ${theme.colors.gray};

			&::placeholder {
				color: currentColor;
			}
		}
	`
};

export const TextFieldContainer = styled.div<{ $disabled?: boolean; $error?: boolean; }>`
	${({ theme, $disabled, $error }) => css`
		${$disabled && containerModifiers.disabled(theme)}
		${$error && containerModifiers.error(theme)}
	`}
`;

export const InputWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		background-color: ${theme.colors.lightGray};
		border-radius: 0.2rem;
		padding: 0 ${theme.spacings.xsmall};
		border: 0.2rem solid;
		border-color: ${theme.colors.lightGray};

		&:focus-within {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}
	`}
`;

export const Input = styled.input<{ $iconPosition?: "left" | "right" | undefined; }>`
	${({ theme, $iconPosition }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} 0;
        padding-${$iconPosition}: ${theme.spacings.xsmall};
		background: transparent;
		border: 0;
		outline: none;
		width: ${$iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

		&:-webkit-autofill {
			-webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray} inset;
			filter: none;

			&::first-line {
				font-family: ${theme.font.family};
				font-size: ${theme.font.sizes.medium};
			}
		}
	`}
`;

export const Label = styled.label`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.black};
		cursor: pointer;
	`}
`;

export const Icon = styled.div<{ $iconPosition?: "left" | "right" | undefined; }>`
	${({ theme, $iconPosition }) => css`
		display: flex;
		align-items: center;
		width: 2.2rem;
		color: ${theme.colors.gray};
		order: ${$iconPosition === 'right' ? 1 : 0};

		& > svg {
			width: 2.2rem;
      		height: 100%;
		}
	`}
`;

export const Error = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.red};
		font-size: ${theme.font.sizes.xsmall};
	`}
`;
