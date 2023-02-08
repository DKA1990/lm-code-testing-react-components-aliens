import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateSpecies } from '../validate';
import SpeciesName, { SpeciesNameProps } from './SpeciesName';

const requiredProps : SpeciesNameProps = {
    speciesName: 'Human',
    changeSpeciesName: () => { }
}

test('renders form element', () => {	
    const { container } = render(<SpeciesName {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('input-container');
});

test('contains correct value when given input', () => {	
    render(<SpeciesName {...requiredProps}/>);
    const speciesText = screen.getByDisplayValue('Human');
	expect(speciesText).toBeInTheDocument();
});

test('renders label', () => {
	render(<SpeciesName {...requiredProps}/>);
	const labelText = screen.getByText('Species Name:');
	expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = jest.fn();

    const changeTestProps : SpeciesNameProps = {
        speciesName: 'Human',
        changeSpeciesName: mockChange
    }

	render(<SpeciesName {...changeTestProps}/>);
	const inputField = screen.getByRole('textbox', {name: 'species'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.type(inputField, 'Martian');
    }
    // Called once for each character
    expect(mockChange).toHaveBeenCalledTimes(7);
});

describe('when given a string, validateSpecies returns correct error message', () => {
    test('when given string "valid", returns no error', () => {
        const errorMessage : string | undefined = validateSpecies('Valid');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "546", returns no numbers error', () => {
        const errorMessage : string | undefined = validateSpecies('546');
        expect(errorMessage).toBe('Species name can only contain letters! No numbers or special characters puny human!');
    });
    test('when given string "A", returns no numbers error', () => {
        const errorMessage : string | undefined = validateSpecies('A');
        expect(errorMessage).toBe('Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!');
    });
});