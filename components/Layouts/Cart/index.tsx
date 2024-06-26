'use client';

import React from 'react';
import * as S from './styles';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import CartList, { CartListProps } from '@/components/CartList';
import PaymentOptions, {
	PaymentOptionsProps
} from '@/components/PaymentOptions';
import Base from '../Base';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Empty from '@/components/Empty';
import Divider from '@/components/Divider';
import ShowCase from '@/components/ShowCase';

export type CartLayoutProps = {
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
} & CartListProps &
	Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
	recommendedTitle,
	recommendedGames,
	recommendedHighlight,
	items,
	total,
	cards
}: CartLayoutProps) => {
	const handlePayment = () => ({});

	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					My cart
				</Heading>

				{items?.length ? (
					<S.Content>
						<CartList items={items} total={total} />

						<PaymentOptions cards={cards} handlePayment={handlePayment} />
					</S.Content>
				) : (
					<Empty
						title="Your cart is empty"
						description="Go back to the store and explore great games and offers"
						hasLink
					/>
				)}

				<Divider />
			</Container>

			<ShowCase
				title={recommendedTitle}
				games={recommendedGames}
				highlight={recommendedHighlight}
			/>
		</Base>
	);
};

export default Cart;
