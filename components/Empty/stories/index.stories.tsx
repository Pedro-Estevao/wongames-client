import { Meta, StoryObj } from '@storybook/react';
import Empty, { EmptyProps } from '@/components/Empty';

export default {
	title: 'Empty',
	component: Empty,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta<EmptyProps>;

export const Default: StoryObj<EmptyProps> = {
	args: {
		title: 'Your wishlist is empty',
		description: 'Games added to your wishlist will appear here',
		hasLink: true
	}
};
