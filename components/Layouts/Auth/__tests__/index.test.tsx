import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Auth from '@/components/Layouts/Auth';

describe('<Auth />', () => {
    it('should render all components and children', () => {
        render(<Auth title="Auth Title"><input type="text" /></Auth>);

        expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2);

        expect(screen.getByRole('heading', { name: /All your favorite games in one place/i })).toBeInTheDocument();

        expect(screen.getByRole('heading', { name: /won is the best and most complete gaming platform/i })).toBeInTheDocument();

        expect(screen.getByRole('heading', { name: /auth title/i })).toBeInTheDocument();

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});