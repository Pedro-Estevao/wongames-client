'use client';

import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Input = styled.input`
	${({ theme }) => css`
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		appearance: none;
		width: 1.8rem;
		height: 1.8rem;
		border: 0.2rem solid ${theme.colors.darkGray};
		border-radius: 0.2rem;
		transition: background-color border ${theme.transition.fast};
		outline: none;

		&::before {
			content: '';
			width: 0.6rem;
			height: 0.9rem;
			border: 0.2rem solid ${theme.colors.white};
			border-top: 0;
			border-left: 0;
			transform: rotate(45deg);
			position: absolute;
			top: 0.1rem;
			opacity: 0;
			transition: ${theme.transition.fast};
		}

		&:focus {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}

		&:hover {
			border-color: ${theme.colors.gray};
			transition: ${theme.transition.fast};
		}

		&:checked {
			border-color: ${theme.colors.primary};
			background: ${theme.colors.primary};

			&:before {
				opacity: 1;
			}
		}
	`}
`;

export const Label = styled.label<{ $labelColor: 'white' | 'black' }>`
	${({ theme, $labelColor }) => css`
		cursor: pointer;
		padding-left: ${theme.spacings.xxsmall};
    	color: ${theme.colors[$labelColor!]};
		line-height: 1.8rem;
	`}
`;
