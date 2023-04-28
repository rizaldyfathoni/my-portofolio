import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';

test('renders learn react link', () => {
  render(<HeaderComponent />);
  const linkElement = screen.getByText('Header');
  expect(linkElement).toBeInTheDocument();
});
