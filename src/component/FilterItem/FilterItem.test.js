import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import FilterItem from './FilterItem';

afterEach(cleanup)

const checkboxId = 'checkbox';

describe('FilterItem', () => {
  it('should check if checkbox is checked/unchecked', async () => {
    const { getByTestId } = render(<FilterItem />);
    const checkbox = getByTestId(checkboxId);
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  it('should render same name passed into name prop', async () => {
    render(<FilterItem name='Classic Range' />)
    const labelElement = screen.getByText(/Classic Range/i)
    expect(labelElement).toBeInTheDocument();
  });
})