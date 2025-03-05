import { render, screen, waitFor } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { theme } from '@/public/styles/theme';
import Checkbox from '@/components/Checkbox';

describe('<Checkbox />', () => {
    it('should render with label', () => {
        const { container } = render(<Checkbox label="checkbox label" labelFor="check" />);
        const { firstChild } = container;

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
        expect(firstChild).toMatchSnapshot();
    });

    it('should render without label', () => {
        render(<Checkbox />);

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
    });

    it('should render with black label', () => {
        render(<Checkbox label="checkbox label" labelFor="check" labelColor="black" />);

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({color: theme.colors.black});
    });

    it('should dispatch onCheck when status changes', async () => {
        const onCheck = jest.fn();

        render(<Checkbox label="Checkbox" onCheck={onCheck} />);

        expect(onCheck).not.toHaveBeenCalled();

        await userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {expect(onCheck).toHaveBeenCalledTimes(1)});
        expect(onCheck).toHaveBeenCalledWith(true);
    });

    it('should call onCheck with false if the Checkbox is already checked', async () => {
        const onCheck = jest.fn();

        render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

        await userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {expect(onCheck).toHaveBeenCalledTimes(1)});
        expect(onCheck).toHaveBeenCalledWith(false);
    });

    it('should be accessible with tab', async () => {
        render(<Checkbox label="Checkbox" labelFor="Checkbox" />);

        expect(document.body).toHaveFocus();

        await userEvent.tab();

        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
    });
});