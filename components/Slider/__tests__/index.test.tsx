import '@/.jest/match-media.mock';
import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Slider from "@/components/Slider";

beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };
});

describe('<Slider />', () => {
    it('should render children as slider item', () => {
        const { container } = render(
            <Slider settings={{ slidesToShow: 1, infinite: false }}>
                <p>Item 1</p>
                <p>Item 2</p>
            </Slider>
        );
    
        expect(
            screen.getByText(/item 1/i).parentElement?.parentElement
        ).toHaveClass('slick-slide');
    
        expect(
            screen.getByText(/item 2/i).parentElement?.parentElement
        ).toHaveClass('slick-slide');
    
        expect(container.firstChild).toMatchSnapshot();
    });
});