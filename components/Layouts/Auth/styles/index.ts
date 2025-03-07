'use client';

import styled, { css } from 'styled-components';
import * as HeadingStyles from '@/components/Heading/styles';
import * as LogoStyles from '@/components/Logo/styles';
import media from "styled-media-query";

export const AuthContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	height: 100vh;

	${media.greaterThan("medium")`
		grid-template-columns: 1fr 1fr;
	`}
`;

export const BannerBlock = styled.div`
	${({ theme }) => css`
		position: relative;
		padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge} ${theme.spacings.large};
		
		${media.lessThan('medium')`
			display: none;
		`}

		&:after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${theme.colors.black};
			opacity: 0.85;
		}
	`}
`;

export const BannerContent = styled.div`
	${({ theme }) => css`
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		justify-content: space-between;
		color: ${theme.colors.white};
		height: 100%;
		z-index: ${theme.layers.base};

		a {
			width: fit-content;
			height: fit-content;
		}
	`}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge};
		font-weight: ${theme.font.light};
		margin-top: ${theme.spacings.xxsmall};

		strong {
			color: ${theme.colors.primary};
		}
	`}
`;

export const Footer = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xsmall};
		text-align: center;
		align-self: end;
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.white};
		display: grid;
		align-items: center;
		justify-content: center;
	`}
`;

export const ContentWrapper = styled.div`
	${({ theme }) => css`
		width: 30rem;

		${media.greaterThan('medium')`
			width: 36rem;
		`}

		${LogoStyles.LogoContainer} {
			margin: 0 auto ${theme.spacings.xxlarge};
		}

		${HeadingStyles.HeadingContainer} {
			margin-bottom: ${theme.spacings.medium};
		}
	`}
`;
