import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateBeings } from '../validate';
import BeingsNumber, { BeingsNumberProps } from './BeingsNumber';

const requiredProps : BeingsNumberProps = {
    beingsNumber: '7000000000',
    changeBeingsNumber: () => { },
}

test('renders form element', () => {	
    const { container } = render(<BeingsNumber {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('input-container');
});

test('contains correct value when given input', () => {	
    render(<BeingsNumber {...requiredProps}/>);
    const beingsText = screen.getByDisplayValue('7000000000');
	expect(beingsText).toBeInTheDocument();
});

test('renders label', () => {
	render(<BeingsNumber {...requiredProps}/>);
	const labelText = screen.getByText('Number of Beings:');
	expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = jest.fn();

    const changeTestProps : BeingsNumberProps = {
        beingsNumber: '7000000000',
        changeBeingsNumber: mockChange
    }

	render(<BeingsNumber {...changeTestProps}/>);
	const inputField = screen.getByRole('textbox', {name: 'beings'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.type(inputField, '6000000000');
    }
    // Called once for each character
    expect(mockChange).toHaveBeenCalledTimes(10);
});

describe('when given a string, validateBeings returns correct error message', () => {
    test('when given string "7000000000", returns no error', () => {
        const errorMessage : string | undefined = validateBeings('7000000000');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "1", returns number to small error', () => {
        const errorMessage : string | undefined = validateBeings('1');
        expect(errorMessage).toBe('Feeble planets contained fewer than 1000000000 beings will be harvested of all matter then destroyed!');
    });
    test('when given string "NotANumber", returns no special characters error', () => {
        const errorMessage : string | undefined = validateBeings('NotANumber');
        expect(errorMessage).toBe('Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!');
    });
});