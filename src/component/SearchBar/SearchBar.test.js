import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render input element', async () => {
    render(<SearchBar placeholder={'Search...'} />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in the input', async () => {
    render(<SearchBar placeholder={'Search...'} />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(inputElement, { target: { value: 'Buzz'}})
    expect(inputElement.value).toBe('Buzz');
  });
})
