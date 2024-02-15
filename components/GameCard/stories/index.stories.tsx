import { Meta, StoryObj } from '@storybook/react';
import GameCard, { GameCardProps } from '@/components/GameCard';

export default {
	title: 'Game/GameCard',
	component: GameCard,
	argTypes: {
		ribbon: {
			type: 'string'
		},
		onFav: {
			action: 'clicked'
		}
	},
	args: {
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 200,00'
	},
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div
				style={{
					width: '100%',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<div style={{ width: '30rem' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<GameCardProps> = {};

export const WithRibbon: StoryObj<GameCardProps> = {
	args: {
		ribbon: '20% OFF',
		ribbonSize: 'small',
		ribbonColor: 'primary'
	}
};
