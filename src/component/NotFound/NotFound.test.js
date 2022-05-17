import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';


it('should render Not Found', () => {
  render(<NotFound />);
  const headerElement = screen.getByText(/Page not found/i);
  expect(headerElement).toBeInTheDocument();
});
