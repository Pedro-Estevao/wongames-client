'use client';

import styled, { css } from 'styled-components';
import * as HeadingStyles from '@/components/Heading/styles';
import * as HighlightStyles from '@/components/Highlight/styles';

export const HomeConstainer = styled.div``;

export const SectionBanner = styled.section`
	${() => css`
		margin: 4rem calc(-3.2rem / 2);

		@media (min-width: 768px) {
			position: relative;
			margin: 4rem 0;
			z-index: 10;
		}
	`}
`;

export const SectionNews = styled.div`
	${() => css`
		margin-bottom: calc(5.6rem * 2);

		@media (min-width: 1200px) {
			margin-top: -13rem;
		}

		/* @media (min-width: 768px) { */
		margin-bottom: 0;
		padding-top: 14rem;
		padding-bottom: 10rem;
		background-color: #f2f2f2;
		clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

		${HeadingStyles.HeadingContainer} {
			color: #030517;
		}
		/* } */
	`}
`;

export const SectionUpcoming = styled.div`
	${() => css`
		${HighlightStyles.HighlightContainer} {
			margin-top: calc(4.8rem * 2);
		}
	`}
`;