import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '@/components/Highlight';
import item from '../mocks/mock';

export default {
	title: 'Highlight',
	component: Highlight,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: { ...item },
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '104rem' }}>
				<Story />
			</div>
		)
	]
} as Meta<HighlightProps>;

export const Default: StoryObj<HighlightProps> = {};

export const WithFloatImage: StoryObj<HighlightProps> = {
	args: {
		floatImage: '/img/red-dead-float.png'
	}
};
