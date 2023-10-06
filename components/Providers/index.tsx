import { PropsWithChildren } from 'react';
import GlobalStyles from '@/public/styles/global';
import ThemeProviderWrapper from './themeProvider';

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<GlobalStyles />
			<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
		</>
	);
}
