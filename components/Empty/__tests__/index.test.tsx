import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Empty from "@/components/Empty";

const props = {
	title: 'A simple title',
	description: 'A simple description',
};

describe('<Empty />', () => {
	it('should render correctly', () => {
		const { container } = render(<Empty {...props} hasLink />);

		expect(
			screen.getByAltText(/A gamer in a couch playing videogame/i)
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /a simple title/i })
		).toBeInTheDocument();

		expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: /go back to store/i })
		).toHaveAttribute('href', '/');

		expect(container.parentElement).toMatchSnapshot();
	});

	it('should not render link when hasLink is not passed', () => {
		render(<Empty {...props} />);

		expect(
			screen.queryByRole('link', { name: /go back to store/i })
		).not.toBeInTheDocument();
	});
});