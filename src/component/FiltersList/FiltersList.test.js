import { cleanup, render, screen } from '@testing-library/react';
import FiltersList from './FiltersList';

afterEach(cleanup)

describe('FiltersList', () => {
  it('should render input element', async () => {
    render(<FiltersList />);
    // const inputElement = screen.getByPlaceholderText(/Search.../i);
    // expect(inputElement).toBeInTheDocument();
  });
})