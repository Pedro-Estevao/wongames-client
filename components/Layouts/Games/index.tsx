'use client';

import React from 'react';
import * as S from './styles';
import Base from '../Base';
import GameCard, { GameCardProps } from '@/components/GameCard';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import Grid from '@/components/Grid';
import { RiArrowDownSLine } from '@remixicon/react';
import { 
	GameEntityResponseCollection, 
	// GameFragmentFragment, 
	GetGamesQuery, 
	GetGamesQueryVariables 
} from "@/graphql/generated/graphql";
import { GET_GAMES } from "@/graphql/queries/games";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gamesMapper } from "@/utils/mappers";

export type GamesLayoutProps = {
	games?: GameCardProps[];
	filterItems: ItemProps[];
};

const Games = ({ filterItems }: GamesLayoutProps) => {
	const { error, data, fetchMore } = useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GET_GAMES, { 
		variables: { start: 0, limit: 15 }, 
	});

	const handleFilter = () => {
		return;
	};

	const handleShowMore = () => {
		fetchMore({ variables: { start: 15, limit: 15 }});
	};

	// if (loading) return <p>Loading...</p>;
	if (error) return null;

	// console.log(data);

	return (
		<Base>
			<S.Main>
				<ExploreSidebar items={filterItems} onFilter={handleFilter} />

				<section>
					<Grid>
						{/* {data.games?.data.map((game) => (
							<GameCard 
								key={(game.attributes as GameFragmentFragment).slug}
								title={(game.attributes as GameFragmentFragment).name}
								slug={(game.attributes as GameFragmentFragment).slug}
								developer={(game.attributes as GameFragmentFragment).developers?.data[0].attributes?.name || 'Desconhecido'}
								img={`http://localhost:1337${(game.attributes as GameFragmentFragment).cover?.data?.attributes?.url}`}
								price={(game.attributes as GameFragmentFragment).price}
							/>
						))} */}
						{gamesMapper(data.games as GameEntityResponseCollection).map((game) => (
							<GameCard 
								key={game.slug}
								title={game.title}
								slug={game.slug}
								developer={game.developer || 'Desconhecido'}
								img={game.img}
								price={game.price}
							/>
						))}
					</Grid>

					<S.ShowMore 
						role="button" 
						onClick={handleShowMore}
					>
						<p>Show More</p>
						<RiArrowDownSLine size={35} />
					</S.ShowMore>
				</section>
			</S.Main>
		</Base>
	);
};

export default Games;
