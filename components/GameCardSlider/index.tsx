'use client';

import React from 'react';
import * as S from './styles';
import Slider, { SliderSettings } from '../Slider';
import GameCard, { GameCardProps } from '../GameCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const settings: SliderSettings = {
	arrows: true,
	slidesToShow: 4,
	infinite: false,
	lazyLoad: 'ondemand',
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2
			}
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2
			}
		},
		{
			breakpoint: 570,
			settings: {
				arrows: false,
				slidesToShow: 1.2
			}
		},
		{
			breakpoint: 375,
			settings: {
				arrows: false,
				slidesToShow: 1.1
			}
		}
	],
	nextArrow: <FontAwesomeIcon icon={faArrowRight} aria-label="next games" />,
	prevArrow: <FontAwesomeIcon icon={faArrowLeft} aria-label="previous games" />
};

export type GameCardSliderProps = {
	items: GameCardProps[];
	color?: 'white' | 'black';
};

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
	return (
		<S.GameCardSliderContainer color={color}>
			<Slider settings={settings}>
				{items.map((item, index) => (
					<GameCard key={`game-card-${index}`} {...item} />
				))}
			</Slider>
		</S.GameCardSliderContainer>
	);
};

export default GameCardSlider;
