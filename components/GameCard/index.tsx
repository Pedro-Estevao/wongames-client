'use client';

import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import {
	faCartShopping,
	faHeart as heartSolid
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import Ribbon, { RibbonColorsProps, RibbonSizeProps } from '../Ribbon';

export type GameCardProps = {
	title: string;
	developer: string;
	img: string;
	price: string;
	promotionalPrice?: string;
	favorite?: boolean;
	ribbon?: React.ReactNode;
	ribbonColor?: RibbonColorsProps;
	ribbonSize?: RibbonSizeProps;
	onFav?: () => void;
};

const GameCard = ({
	title,
	developer,
	img,
	price,
	promotionalPrice,
	favorite = false,
	ribbon,
	ribbonColor = 'primary',
	ribbonSize = 'small',
	onFav
}: GameCardProps) => {
	return (
		<S.GameCardContainer className="relative flex flex-col w-full h-full bg-white">
			{!!ribbon && (
				<Ribbon color={ribbonColor} size={ribbonSize}>
					{ribbon}
				</Ribbon>
			)}
			<S.ImageBox className="h-[14rem] w-full">
				<Image src={img} width={300} height={140} alt={title} />
			</S.ImageBox>
			<S.Content className="relative flex flex-col justify-between h-full m-xsmall">
				<S.Info>
					<S.Title className="text-medium leading-medium font-bold text-black">
						{title}
					</S.Title>
					<S.Developer className="text-small font-bold text-gray">
						{developer}
					</S.Developer>
				</S.Info>
				<S.FavButton
					onClick={onFav}
					className="absolute text-primary right-0 top-[-0.5rem] cursor-pointer"
					role="button"
				>
					{favorite ? (
						<FontAwesomeIcon
							icon={heartSolid}
							className="w-[2.5rem]"
							aria-label="Remove from Wishlist"
						/>
					) : (
						<FontAwesomeIcon
							icon={heartRegular}
							className="w-[2.5rem]"
							aria-label="Add to Wishlist"
						/>
					)}
				</S.FavButton>
				<S.BuyBox className="flex items-center justify-end mt-xxsmall">
					{!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
					<S.Price>{promotionalPrice || price}</S.Price>
					<Button
						icon={<FontAwesomeIcon icon={faCartShopping} />}
						size="small"
					/>
				</S.BuyBox>
			</S.Content>
		</S.GameCardContainer>
	);
};

export default GameCard;
