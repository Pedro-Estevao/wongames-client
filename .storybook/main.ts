import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/nextjs',
		options: {
			builder: {
				useSWC: true
			}
		}
	},
	stories: [
		'../components/**/*.stories.@(ts|tsx)',
		'../app/**/*.stories.@(ts|tsx)'
	],
	features: {
		storyStoreV7: false
	},
	addons: [
		'@storybook/addon-controls',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-onboarding',
		'@storybook/addon-styling'
	],
	typescript: {
		reactDocgen: 'react-docgen-typescript'
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../public'],
	core: {
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				fsCache: true,
				lazyCompilation: true
			}
		}
	},
	async webpackFinal(config, { configType }) {
		config.resolve = config.resolve ?? {};
		config.resolve.alias = config.resolve.alias ?? {};
		config.resolve.alias['@'] = path.resolve(__dirname, '../');

		if (configType === 'DEVELOPMENT') {
			config.devtool = 'eval-source-map';
		}
		if (configType === 'PRODUCTION') {
			config.devtool = 'source-map';
		}

		return config;
	}
};
export default config;
