'use client';

import React from 'react';
import * as S from './styles';
import Base from '../Base';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import Gallery, { GalleryImageProps } from '@/components/Gallery';
import TextContent from '@/components/TextContent';
import GameDetails, { GameDetailsProps } from '@/components/GameDetails';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import ShowCase from '@/components/ShowCase';
import Divider from '@/components/Divider';

export type GameLayoutProps = {
	cover: string;
	gameInfo: GameInfoProps;
	gallery?: GalleryImageProps[];
	description: string;
	details: GameDetailsProps;
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	recommendedGames: GameCardProps[];
};

const Game = ({
	cover,
	gameInfo,
	gallery,
	description,
	details,
	upcomingGames,
	upcomingHighlight,
	recommendedGames
}: GameLayoutProps) => {
	console.log('cover', gallery);

	return (
		<Base>
			<S.Cover src={cover} role="image" aria-label="cover" />

			<S.Main>
				<S.SectionGameInfo>
					<GameInfo {...gameInfo} />
				</S.SectionGameInfo>

				<S.SectionGallery>
					{!!gallery && <Gallery items={gallery} />}
				</S.SectionGallery>

				<S.SectionDescription>
					<TextContent title="Description" content={description} />
				</S.SectionDescription>

				<S.SectionGameDetails>
					<GameDetails {...details} />
					<Divider />
				</S.SectionGameDetails>

				<ShowCase
					title="Upcomming"
					games={upcomingGames}
					highlight={upcomingHighlight}
				/>

				<ShowCase title="You may like these games" games={recommendedGames} />
			</S.Main>
		</Base>
	);
};

export default Game;
