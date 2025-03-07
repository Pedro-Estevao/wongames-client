import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Base from "@/components/Layouts/Base";

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(() => ({
        data: null,
        status: 'unauthenticated',
    })),
}));

jest.mock('@/components/Menu', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Menu"></div>
    },
}));

jest.mock('@/components/Footer', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Footer"></div>
    },
}));


describe('<Base />', () => {
    it('should render menu, footer and children', () => {
        render(
            <Base>
                <h1>Heading</h1>
            </Base>
        );

        expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
        expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /heading/i })
        ).toBeInTheDocument();
    });
});