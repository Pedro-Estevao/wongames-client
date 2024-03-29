'use client';

import { createGlobalStyle } from 'styled-components';
import './tailwind-import.css';
import { NamedExoticComponent } from 'react';

type GlobalStylesProps = {
	removeBg?: boolean;
};

const GlobalStyles: NamedExoticComponent<GlobalStylesProps> = createGlobalStyle`
	@font-face {
		font-display: swap;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 300;
		src: url('../fonts/poppins-v20-latin-300.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/poppins-v20-latin-regular.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		src: url('../fonts/poppins-v20-latin-600.woff2') format('woff2');
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		&::before,
		&::after {
			box-sizing: inherit;
		}
	}

	:root {
		--body-bg: #06092b;

		font-size: 62.5%;
	}

	[data-theme-mode="dark"] {
		--body-bg: #1c1c1c;
	}

	body {
		${({ removeBg }) => !removeBg && 'background-color: var(--body-bg);'}

		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 1.6rem;
	}
`;

export default GlobalStyles;
