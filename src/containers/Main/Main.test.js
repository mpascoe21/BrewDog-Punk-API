import { cleanup, render, screen } from '@testing-library/react';
import Main from './Main';

afterEach(cleanup)

describe('Main', () => {
  it('should render Main', async () => {
    //render(<Main />);
  });

  // it('should render header', async () => {
  //   render(<Main />);
  //   const headerElement = screen.getByText(/Brewdog Beers/i);
  //   expect(headerElement).toBeInTheDocument();
  //   // const {getByTestId} = render(<CardList />);
  //   // //const beerCardElement = screen.getByPlaceholderText(/Search.../i);
  //   // expect(getByTestId('beerCard')).toHaveTextContent('Great with:');
  // });
})