import { cleanup, render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard";

afterEach(cleanup);

describe("BeerCard", () => {
  it('should render BeerCard', async () => {
  });

  // it("should render same name of beer as passed into name prop ", () => {
  //   render(<BeerCard name="Buzz" />);
  //   const beerCardElement = screen.getByText(/Buzz/i);
  //   //const beerCardElement = await screen.findByText(/Buzz/i);
  //   expect(beerCardElement).toBeInTheDocument();

  //   // const {getByTestId} = render(<BeerCard />);
  //   //const beerCardElement = screen.getByPlaceholderText(/Search.../i);
  //   // expect(getByTestId('beerCard')).toHaveTextContent('Great with:');
  //   // const inputElement = screen.getByPlaceholderText(/Search.../i);
  //   // expect(inputElement).toBeInTheDocument();
  // });
});
