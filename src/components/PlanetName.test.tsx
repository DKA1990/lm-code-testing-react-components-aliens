import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validatePlanet } from '../validate';
import PlanetName, { PlanetNameProps } from './PlanetName';

const requiredProps : PlanetNameProps = {
    planetName: 'Earth',
    changePlanetName: () => { }
}

test('renders form element', () => {	
    const { container } = render(<PlanetName {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('input-container');
});

test('contains correct value when given input', () => {	
    render(<PlanetName {...requiredProps}/>);
    const planetText = screen.getByDisplayValue('Earth');
	expect(planetText).toBeInTheDocument();
});

test('renders label', () => {
	render(<PlanetName {...requiredProps}/>);
	const labelText = screen.getByText('Planet Name:');
	expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = jest.fn();

    const changeTestProps : PlanetNameProps = {
        planetName: 'Earth',
        changePlanetName: mockChange
    }

	render(<PlanetName {...changeTestProps}/>);
	const inputField = screen.getByRole('textbox', {name: 'planet'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.type(inputField, 'Mars');
    }
    // Called once for each character
    expect(mockChange).toHaveBeenCalledTimes(4);
});

describe('when given a string, validatePlanet returns correct error message', () => {
    test('when given string "valid", returns no error', () => {
        const errorMessage : string | undefined = validatePlanet('Valid');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "Blarghulon!?", returns no special characters error', () => {
        const errorMessage : string | undefined = validatePlanet('Blarghulon!?');
        expect(errorMessage).toBe('Planet name can not contain special characters! Feeble fleshbags are testing our patience!');
    });
    test('when given string "A", returns to few characters error', () => {
        const errorMessage : string | undefined = validatePlanet('A');
        expect(errorMessage).toBe('Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!');
    });
});