import '@/.jest/match-media.mock';
import { render, screen, waitFor } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Radio from "@/components/Radio";
import { theme } from "@/public/styles/theme";
import userEvent from "@testing-library/user-event";

describe('<Radio />', () => {
	it('should render with label (white)', () => {
		const { container } = render(
			<Radio label="Radio" labelFor="check" value="anyValue" />
		);
		const { firstChild } = container;

		const label = screen.getByText('Radio');
		expect(label).toBeInTheDocument();
		expect(label).toHaveStyle({ color: theme.colors.white });
		expect(firstChild).toMatchSnapshot();
	});

	it('should render with label (black)', () => {
		render(<Radio label="Radio" labelColor="black" />);

		const label = screen.getByText('Radio');
		expect(label).toBeInTheDocument();
		expect(label).toHaveStyle({ color: theme.colors.black });
	});

	it('should render without label', () => {
		render(<Radio />);

		expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
	});

	it('should dispatch onCheck when label status changes', async () => {
		const onCheck = jest.fn();
		render(
			<Radio
				label="Radio"
				labelFor="Radio"
				onCheck={onCheck}
				value="anyValue"
			/>
		);

		expect(onCheck).not.toHaveBeenCalled();

		await userEvent.click(screen.getByLabelText('Radio'));
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		});
		expect(onCheck).toHaveBeenCalledWith('anyValue');
	});

	it('Should be accessible with tab', async () => {
		render(<Radio label="Radio" labelFor="Radio" />);

		const radio = screen.getByLabelText('Radio');

		expect(document.body).toHaveFocus();

		await userEvent.tab();

		expect(radio).toHaveFocus();
	});
});