import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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