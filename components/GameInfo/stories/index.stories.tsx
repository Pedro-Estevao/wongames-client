import { Meta, StoryObj } from '@storybook/react';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import GameInfoItens from '../mocks/mock';

export default {
	title: 'Game/GameInfo',
	component: GameInfo,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: GameInfoItens,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
				<Story />
			</div>
		)
	]
} as Meta<GameInfoProps>;

export const Default: StoryObj<GameInfoProps> = {};
