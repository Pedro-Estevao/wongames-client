import { Meta, StoryObj } from '@storybook/react';
import Menu from '@/components/Menu';
import { MenuProps } from '@/components/Menu';

export default {
	title: 'Page/Menu',
	component: Menu,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '0px 20px' }}>
				<Story />
			</div>
		)
	]
} as Meta<MenuProps>;

export const Default: StoryObj<MenuProps> = {};

export const Logged: StoryObj<MenuProps> = {
	args: {
		username: 'Pedro'
	}
};
