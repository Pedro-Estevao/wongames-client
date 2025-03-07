import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import GameItem, { GameItemProps } from "@/components/GameItem";
import { CartContextDefaultValues } from "@/hooks/useCart";
import userEvent from "@testing-library/user-event";

const props: GameItemProps = {
    id: '1',
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
};

describe('<GameItem />', () => {
    it('should render the item', () => {
        render(<GameItem {...props} />);

        expect(
            screen.getByRole('heading', { name: props.title })
        ).toBeInTheDocument();

        const image = screen.getByRole('img', { name: props.title });

        expect(image).toHaveAttribute('src');
        expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(props.img)));

        expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
    });

    it('should render remove if the item is inside the cart and call remove', async () => {
        const cartProviderProps = {
            ...CartContextDefaultValues,
            isInCart: () => true,
            removeFromCart: jest.fn()
        };
        render(<GameItem {...props} />, { cartProviderProps });

        const removeLink = screen.getByText(/remove/i);
        expect(removeLink).toBeInTheDocument();

        await userEvent.click(removeLink);
        expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
    });

    it('should render the item with download link', () => {
        const downloadLink = 'https://link';

        render(<GameItem {...props} downloadLink={downloadLink} />);

        expect(
            screen.getByRole('link', { name: `Get ${props.title} here` })
        ).toHaveAttribute('href', downloadLink);
    });

    it('should render the payment info', () => {
        const paymentInfo = {
            flag: 'mastercard',
            img: '/img/master-card.png',
            number: '**** **** **** 4326',
            purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
        };

        render(<GameItem {...props} paymentInfo={paymentInfo} />);

        const image = screen.getByRole('img', { name: paymentInfo.flag });

        expect(image).toHaveAttribute('src');
        expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(paymentInfo.img)));

        expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
        expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
    });

    it('should render free game when theres no paymentInfo', () => {
        const paymentInfo = {
            flag: '',
            img: '',
            number: 'Free Game',
            purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
        };

        render(<GameItem {...props} paymentInfo={paymentInfo} />);

        expect(screen.getByText(/free game/i)).toBeInTheDocument();
    });
});