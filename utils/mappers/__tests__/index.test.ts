import { BannerFragmentFragment, GameFragmentFragment, HighlightFragmentFragment } from "@/graphql/generated/graphql";
// import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import { bannerMapper, cartMapper, gamesMapper, highlightMapper, ordersMapper } from "..";
import { OrdersFragmentFragment } from "@/@types/graphql-extended";

describe('bannerMapper()', () => {
    it('should return the right format when mapped', () => {
        const banner = {
            image: {
                url: '/image.jpg'
            },
            title: 'Banner title',
            subTitle: 'Banner subtitle',
            button: {
                label: 'button label',
                link: 'button link'
            },
            ribbon: {
                text: 'ribbon text',
                color: 'primary',
                size: 'small'
            }
        } as BannerFragmentFragment;

        expect(bannerMapper([banner])).toStrictEqual([
            {
                img: 'http://localhost:1337/image.jpg',
                title: 'Banner title',
                subTitle: 'Banner subtitle',
                buttonLabel: 'button label',
                buttonLink: 'button link',
                ribbon: 'ribbon text',
                ribbonColor: 'primary',
                ribbonSize: 'small'
            }
        ]);
    });
});

describe('gamesMapper()', () => {
    it('should return an empty array if there are no games', () => {
        expect(gamesMapper([])).toStrictEqual([]);
    });

    it('should return the correct format when mapped', () => {
        const game = {
            id: '1',
            name: 'game',
            developers: [
                {
                    name: 'developer'
                }
            ],
            slug: 'game',
            cover: {
                url: '/image.jpg'
            },
            price: 10
        } as GameFragmentFragment;

        expect(gamesMapper([game])).toStrictEqual([
            {
                id: '1',
                title: 'game',
                slug: 'game',
                developer: 'developer',
                img: 'http://localhost:1337/image.jpg',
                price: 10
            }
        ]);
    });
});

describe('highlightMapper()', () => {
    it('should return empty object if no highlight', () => {
        expect(highlightMapper(null)).toStrictEqual({});
    });

    it('should return mapped highlight', () => {
        const highlight = {
            title: 'title',
            subTitle: 'subTitle',
            background: {
                url: '/image.jpg'
            },
            buttonLabel: 'button label',
            buttonLink: 'button link',
            alignment: 'right',
            floatImage: {
                url: '/image.jpg'
            }
        } as HighlightFragmentFragment;

        expect(highlightMapper(highlight)).toStrictEqual({
            title: 'title',
            subTitle: 'subTitle',
            backgroundImage: 'http://localhost:1337/image.jpg',
            buttonLabel: 'button label',
            buttonLink: 'button link',
            alignment: 'right',
            floatImage: 'http://localhost:1337/image.jpg'
        });
    });
});

describe('cartMapper()', () => {
    it('should return empty array if no games', () => {
        expect(cartMapper([])).toStrictEqual([]);
    });

    it('should return mapped items', () => {
        const game = {
            id: '1',
            cover: {
                url: '/image.jpg'
            },
            name: 'game',
            price: 10
        } as GameFragmentFragment;

        expect(cartMapper([game])).toStrictEqual([
            {
                id: '1',
                img: 'http://localhost:1337/image.jpg',
                title: 'game',
                price: '$10.00'
            }
        ]);
    });
});

describe('ordersMapper()', () => {
    it('should return empty array if no orders', () => {
        expect(ordersMapper(undefined)).toStrictEqual([]);
    });

    it('should return mapped items', () => {
        const orders = [
            {
                __typename: 'Order',
                id: '1',
                card_brand: 'visa',
                card_last4: '4242',
                createdAt: '2021-04-14T18:41:48.358Z',
                games: [
                    {
                        id: '1',
                        name: 'game',
                        developers: [
                            {
                                name: 'developer'
                            }
                        ],
                        slug: 'game',
                        cover: {
                            url: '/image.jpg'
                        },
                        price: 10
                    }
                ] as GameFragmentFragment[]
            }
        ] as OrdersFragmentFragment[];

        expect(ordersMapper(orders)).toStrictEqual([
            {
                id: '1',
                paymentInfo: {
                    flag: 'visa',
                    img: '/img/cards/visa.png',
                    number: '**** **** **** 4242',
                    purchaseDate: 'Purchase made on Apr 14, 2021'
                },
                games: [
                    {
                        id: '1',
                        title: 'game',
                        downloadLink:
                            'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
                        img: 'http://localhost:1337/image.jpg',
                        price: '$10.00'
                    }
                ]
            }
        ]);
    });

    it('should return free game when its free', () => {
        const orders = [
            {
                __typename: 'Order',
                id: '1',
                card_brand: null,
                card_last4: null,
                createdAt: '2021-04-14T18:41:48.358Z',
                games: [
                    {
                        id: '1',
                        name: 'game',
                        developers: [
                            {
                                name: 'developer'
                            }
                        ],
                        slug: 'game',
                        cover: {
                            url: '/image.jpg'
                        },
                        price: 0
                    }
                ] as GameFragmentFragment[]
            }
        ] as OrdersFragmentFragment[];

        expect(ordersMapper(orders)).toStrictEqual([
            {
                id: '1',
                paymentInfo: {
                    flag: null,
                    img: null,
                    number: 'Free Game',
                    purchaseDate: 'Purchase made on Apr 14, 2021'
                },
                games: [
                    {
                        id: '1',
                        title: 'game',
                        downloadLink:
                            'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
                        img: 'http://localhost:1337/image.jpg',
                        price: '$0.00'
                    }
                ]
            }
        ]);
    });
});