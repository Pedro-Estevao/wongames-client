import React, { Suspense } from 'react';
import Games from '@/components/Layouts/Games';
import { getClient } from '@/lib/apolloClient';
import { GameEntityResponseCollection, GetGamesQuery, GetGamesQueryVariables } from '@/graphql/generated/graphql';
import { GET_GAMES } from '@/graphql/queries/games';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';
import { gamesMapper } from "@/utils/mappers";

const GamesPage = async () => {
	const { data } = await getClient().query<GetGamesQuery, GetGamesQueryVariables>({
		query: GET_GAMES,
		variables: { start: 0, limit: 15 },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Games
				games={gamesMapper(data.games as GameEntityResponseCollection)}
				filterItems={exploreSidebarMock}
				// {...data as GamesLayoutProps}
			/>
		</Suspense>
	);
};

export default GamesPage;
