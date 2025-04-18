'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import media from "styled-media-query";

type MenuFullProps = {
	$isOpen: boolean;
};

export const MenuContainer = styled.menu<MenuFullProps>`
	${({ theme, $isOpen }) => css`
		position: relative;
		display: flex;
		align-items: center;
		padding: ${theme.spacings.small} 0;
		z-index: ${$isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};
	`}
`;

export const LogoWrapper = styled.div`
	${media.lessThan('medium')`
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	`}
`;

export const IconWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.white};
		cursor: pointer;
		width: ${theme.spacings.small};
		height: ${theme.spacings.small};
	`}
`;

export const MenuGroup = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: flex-end;
		gap: 1.6rem;
		z-index: ${theme.layers.menu} + 1;

		> div {
			margin-left: ${theme.spacings.xsmall};
		}
	`}
`;

export const MenuNav = styled.div`
	${({ theme }) => css`
    	${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  	`}
`;

export const MenuLink = styled(Link)`
	${({ theme }) => css`
		position: relative;
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
		margin: 0.3rem ${theme.spacings.small} 0;
		text-decoration: none;
		text-align: center;

		&:hover {
			&::after {
				content: '';
				position: absolute;
				display: block;
				height: 0.3rem;
				background-color: ${theme.colors.primary};
				animation: hoverAnimation 0.2s forwards;
			}

			@keyframes hoverAnimation {
				from {
					width: 0;
					left: 50%;
				}
				to {
					width: 100%;
					left: 0;
				}
			}
		}
	`}
`;

export const MenuFull = styled.nav<MenuFullProps>`
	${({ theme, $isOpen }) => css`
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: ${theme.colors.white};
		height: 100%;
		width: 100%;
		overflow: hidden;
		transition: opacity 0.3s ease-in-out;
		opacity: ${$isOpen ? 1 : 0};
		pointer-events: ${$isOpen ? 'all' : 'none'};
		visibility: ${$isOpen ? 'visible' : 'hidden'};
		z-index: ${theme.layers.menu};

		> svg {
			position: absolute;
			top: 0;
			right: 0;
			margin: ${theme.spacings.xsmall};
			cursor: pointer;
			width: ${theme.spacings.small};
			height: ${theme.spacings.small};
		}

		${MenuNav} {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			flex-direction: column;
		}

		${MenuLink} {
			color: ${theme.colors.black};
			font-weight: ${theme.font.bold};
			font-size: ${theme.font.sizes.xlarge};
			margin-bottom: ${theme.spacings.small};
			transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}

		${RegisterBox} {
			transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}
	`};
`;

export const RegisterBox = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

		> span {
			display: block;
			margin: ${theme.spacings.xxsmall} 0;
			font-size: ${theme.font.sizes.xsmall};
		}
	`}
`;

export const CreateAccount = styled(Link)`
	${({ theme }) => css`
		text-decoration: none;
		color: ${theme.colors.primary};
		border-bottom: 0.2rem solid ${theme.colors.primary};
	`}
`;
