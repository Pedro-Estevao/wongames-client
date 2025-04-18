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
	upcomingTitle: string;
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
};

const Game = ({
	cover,
	gameInfo,
	gallery,
	description,
	details,
	upcomingTitle,
	upcomingGames,
	upcomingHighlight,
	recommendedTitle,
	recommendedGames
}: GameLayoutProps) => {
	return (
		<Base>
			<S.Cover $src={cover} role="image" aria-label="cover" />

			<S.Main>
				<S.SectionGameInfo>
					<GameInfo {...gameInfo} />
				</S.SectionGameInfo>

				{!!gallery?.length && (
					<S.SectionGallery>
						<Gallery items={gallery} />
					</S.SectionGallery>
				)}

				<S.SectionDescription>
					<TextContent title="Description" content={description} />
				</S.SectionDescription>

				<S.SectionGameDetails>
					<GameDetails {...details} />
					<Divider />
				</S.SectionGameDetails>

				<ShowCase
					title={upcomingTitle}
					games={upcomingGames}
					highlight={upcomingHighlight}
				/>

				<ShowCase title={recommendedTitle} games={recommendedGames} />
			</S.Main>
		</Base>
	);
};

export default Game;
