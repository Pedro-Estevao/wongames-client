'use client';

import React from 'react';
import * as S from './styles';
import { useWindowSize } from 'usehooks-ts';
import Heading from '../Heading';
import { RiWindowsFill, RiAppleFill, RiUbuntuFill } from '@remixicon/react';

type PlatformProps = 'windows' | 'linux' | 'mac';

export type GameDetailsProps = {
	platforms: PlatformProps[];
};

const GameDetails = ({ platforms }: GameDetailsProps) => {
	const { width } = useWindowSize();

	const platformIcons = {
		windows: <RiWindowsFill size={18} />,
		linux: <RiUbuntuFill size={18} />,
		mac: <RiAppleFill size={18} />
	};

	return (
		<S.GameDetailsContainer>
			{width > 575 && (
				<Heading lineLeft lineColor="secondary">
					Game Details
				</Heading>
			)}

			<S.Content>
				<S.Block>
					<S.Label>Developer</S.Label>
					<S.Description>Gearbox Software</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Release Date</S.Label>
					<S.Description>Nov 16, 2019</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Platforms</S.Label>
					<S.IconsWrapper>
						{platforms.map((icon: PlatformProps) => (
							<S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
						))}
					</S.IconsWrapper>
				</S.Block>

				<S.Block>
					<S.Label>Publisher</S.Label>
					<S.Description>2K</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Rating</S.Label>
					<S.Description>18+</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Genres</S.Label>
					<S.Description>Action / Adventure</S.Description>
				</S.Block>
			</S.Content>
		</S.GameDetailsContainer>
	);
};

export default GameDetails;
