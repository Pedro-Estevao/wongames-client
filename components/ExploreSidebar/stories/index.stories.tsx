import { Meta, StoryObj } from '@storybook/react';
import ExploreSidebar, {
	ExploreSidebarProps
} from '@/components/ExploreSidebar';
import items from '../mocks/mock';
import { fn } from "@storybook/test";

export default {
	title: 'Form/ExploreSidebar',
	component: ExploreSidebar,
	args: { 
		items,
		onClick: fn()
	},
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 16, maxWidth: 320 }}>
				<Story />
			</div>
		)
	]
} as Meta<ExploreSidebarProps>;

export const Default: StoryObj<ExploreSidebarProps> = {};

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
	args: {
		initialValues: {
			price: 'under-50',
			sort_by: 'low-to-high',
			system: 'windows',
			genre: 'rpg'
		}
	}
};
