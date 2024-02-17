import { GalleryImageProps } from '@/components/Gallery';
import GalleryMock from '@/components/Gallery/mocks/mock';
import { GameCardProps } from '@/components/GameCard';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import { GameDetailsProps } from '@/components/GameDetails';
import { GameInfoProps } from '@/components/GameInfo';
import { HighlightProps } from '@/components/Highlight';
import highlightItems from '@/components/Highlight/mocks/mock';

type GamePageMockProps = {
	cover: string;
	gameInfo: GameInfoProps;
	gallery: GalleryImageProps[];
	description: string;
	details: GameDetailsProps;
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	recommendedGames: GameCardProps[];
};

const descriptionHTMLMock: string = `
<img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
<hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality.
<p class="description__copyrights">
CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
</p>`;

const gamePageMock: GamePageMockProps = {
	cover:
		'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
	gameInfo: {
		title: 'Cyberpunk 2077',
		price: '59.00',
		description:
			'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
	},
	gallery: GalleryMock,
	description: descriptionHTMLMock,
	details: {
		developer: 'CD PROJEKT RED',
		releaseDate: '2020-12-10T23:00:00',
		platforms: ['windows'],
		publisher: 'CD PROJEKT RED',
		rating: 'BR18',
		genres: ['Action', 'Role-playing']
	},
	upcomingGames: gameCardSliderItems,
	upcomingHighlight: highlightItems,
	recommendedGames: gameCardSliderItems
};

export default gamePageMock;
