import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateSpecies, validatePlanet, validateBeings } from '../validate';
import TextInput, { TextInputProps } from './TextInput';

describe('tests for species input', () => {
    const requiredProps : TextInputProps = {
        name: 'species',
        stateName: 'Human',
        change: () => { }
    }

    test('renders form element', () => {	
        const { container } = render(<TextInput {...requiredProps}/>);
        expect(container.firstChild).toHaveClass('input-container');
    });

    test('contains correct value when given input', () => {	
        render(<TextInput {...requiredProps}/>);
        const speciesText = screen.getByDisplayValue('Human');
        expect(speciesText).toBeInTheDocument();
    });

    test('renders label', () => {
        render(<TextInput {...requiredProps}/>);
        const labelText = screen.getByText('Species Name:');
        expect(labelText).toBeInTheDocument();
    });

    test('onChange called when given correct prop input', async () => {

        const mockChange = jest.fn();

        const changeTestProps : TextInputProps = {
            name: 'species',
            stateName: 'Human',
            change: mockChange
        }

        render(<TextInput {...changeTestProps}/>);
        const inputField = screen.getByRole('textbox', {name: 'species'});
        expect(inputField).toBeInTheDocument();

        if (inputField) {
            await userEvent.type(inputField, 'Martian');
        }
        // Called once for each character
        expect(mockChange).toHaveBeenCalledTimes(7);
    });
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

describe('tests for planet input', () => {
    const requiredProps : TextInputProps = {
        name: 'planet',
        stateName: 'Earth',
        change: () => { }
    }
    
    test('renders form element', () => {	
        const { container } = render(<TextInput {...requiredProps}/>);
        expect(container.firstChild).toHaveClass('input-container');
    });
    
    test('contains correct value when given input', () => {	
        render(<TextInput {...requiredProps}/>);
        const planetText = screen.getByDisplayValue('Earth');
        expect(planetText).toBeInTheDocument();
    });
    
    test('renders label', () => {
        render(<TextInput {...requiredProps}/>);
        const labelText = screen.getByText('Planet Name:');
        expect(labelText).toBeInTheDocument();
    });
    
    test('onChange called when given correct prop input', async () => {
    
        const mockChange = jest.fn();
    
        const changeTestProps : TextInputProps = {
            name: 'planet',
            stateName: 'Earth',
            change: mockChange
        }
    
        render(<TextInput {...changeTestProps}/>);
        const inputField = screen.getByRole('textbox', {name: 'planet'});
        expect(inputField).toBeInTheDocument();
    
        if (inputField) {
            await userEvent.type(inputField, 'Mars');
        }
        // Called once for each character
        expect(mockChange).toHaveBeenCalledTimes(4);
    });
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

describe('tests for number of beings input', () => {
    const requiredProps : TextInputProps = {
        name: 'beings',
        stateName: '7000000000',
        change: () => { },
    }
    
    test('renders form element', () => {	
        const { container } = render(<TextInput {...requiredProps}/>);
        expect(container.firstChild).toHaveClass('input-container');
    });
    
    test('contains correct value when given input', () => {	
        render(<TextInput {...requiredProps}/>);
        const beingsText = screen.getByDisplayValue('7000000000');
        expect(beingsText).toBeInTheDocument();
    });
    
    test('renders label', () => {
        render(<TextInput {...requiredProps}/>);
        const labelText = screen.getByText('Number of Beings:');
        expect(labelText).toBeInTheDocument();
    });
    
    test('onChange called when given correct prop input', async () => {
    
        const mockChange = jest.fn();
    
        const changeTestProps : TextInputProps = {
            name: 'beings',
            stateName: '7000000000',
            change: mockChange
        }
    
        render(<TextInput {...changeTestProps}/>);
        const inputField = screen.getByRole('textbox', {name: 'beings'});
        expect(inputField).toBeInTheDocument();
    
        if (inputField) {
            await userEvent.type(inputField, '6000000000');
        }
        // Called once for each character
        expect(mockChange).toHaveBeenCalledTimes(10);
    });
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