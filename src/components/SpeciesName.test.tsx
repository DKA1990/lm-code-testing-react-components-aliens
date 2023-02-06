import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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