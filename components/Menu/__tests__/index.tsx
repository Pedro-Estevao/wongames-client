import React from 'react';
// import { fireEvent, render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Menu from '..';

describe('<Menu />', () => {
	it('should render the menu', () => {
		render(<Menu />);
		// const { container } = render(<Menu />);

		// expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument();

		// expect(container.firstChild).toMatchSnapshot();
	});

	// it('should render the menu labels', () => {
	//     render(<Menu />);

	//     expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
	//     expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
	//     expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
	// });

	// it('should render the open/close mobile menu', () => {
	//     render(<Menu />);

	//     const fullMenuElement = screen.getByRole('navigation', { hidden: true });

	//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
	//     expect(fullMenuElement).toHaveStyle({ opacity: 0 });

	// 	fireEvent.click(screen.getByLabelText(/open menu/i));
	//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
	// 	expect(fullMenuElement).toHaveStyle({ opacity: 1 });

	// 	fireEvent.click(screen.getByLabelText(/close menu/i));
	//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
	// 	expect(fullMenuElement).toHaveStyle({ opacity: 0 });
	// });

	// it('should show register box when logged out', () => {
	// 	render(<Menu />);

	// 	expect(screen.getByText(/log in now/i)).toBeInTheDocument();
	// 	expect(screen.getByText(/sign up/i)).toBeInTheDocument();
	// 	expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
	// 	expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
	// });

	// it('should show wishlist and account when logged in', () => {
	// 	render(<Menu />);

	// 	expect(screen.getByText(/my account/i)).toBeInTheDocument();
	// 	expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
	// 	expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
	// 	expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
	// });
});
