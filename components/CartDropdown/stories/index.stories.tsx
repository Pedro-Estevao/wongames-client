import { Meta, StoryObj } from '@storybook/react';
import CartDropdown, { CartDropdownProps } from '@/components/CartDropdown';
import cartListMock from '@/components/CartList/mocks/mock';

export default {
	title: 'CartDropdown',
	component: CartDropdown,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		items: cartListMock,
		total: 'R$ 330,00'
	},
	decorators: [
		(Story) => (
			<div
				style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
			>
				<Story />
			</div>
		)
	]
} as Meta<CartDropdownProps>;

export const Default: StoryObj<CartDropdownProps> = {};
