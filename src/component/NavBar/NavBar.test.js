import { cleanup, render, screen } from '@testing-library/react';
import NavBar from './NavBar';

afterEach(cleanup)

describe('NavBar', () => {
  it('should render input element', async () => {
    render(<NavBar />);
    // const inputElement = screen.getByPlaceholderText(/Search.../i);
    // expect(inputElement).toBeInTheDocument();
  });

  // it('should be able to type in the input', async () => {
  //   render(<SearchBar placeholder={'Search...'} />);
  //   const inputElement = screen.getByPlaceholderText(/Search.../i);
  //   fireEvent.change(inputElement, { target: { value: 'Buzz'}})
  //   expect(inputElement.value).toBe('Buzz');
  // });
})
