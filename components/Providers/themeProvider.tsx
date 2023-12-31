'use client';

import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProviderWrapper({
	children
}: {
	children: ReactNode;
}) {
	return (
		<NextThemesProvider
			attribute="data-theme-mode"
			defaultTheme="light"
			themes={['light', 'dark']}
		>
			{children}
		</NextThemesProvider>
	);
}
