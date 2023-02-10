import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateSpecies, validatePlanet, validateBeings } from '../validate';
import TextInput, { TextInputProps } from './TextInput';

describe('tests for species input', () => {
    const requiredProps : TextInputProps = {
        name: 'species',
        label: 'Species Name: ',
        value: 'Human',
        handleChange: () => { },
        performValidate: validateSpecies
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
        label: 'Species Name: ',
        value: 'Human',
        handleChange: mockChange,
        performValidate: validateSpecies
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

describe('tests for planet input', () => {
    const requiredProps : TextInputProps = {
        name: 'planet',
        label: 'Planet Name: ',
        value: 'Earth',
        handleChange: () => { },
        performValidate: validatePlanet
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
            label: 'Planet Name: ',
            value: 'Earth',
            handleChange: mockChange,
            performValidate: validatePlanet
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

describe('tests for number of beings input', () => {
    const requiredProps : TextInputProps = {
        name: 'beings',
        label: 'Number of Beings: ',
        value: '7000000000',
        handleChange: () => { },
        performValidate: validateBeings
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
            label: 'Number of Beings: ',
            value: '7000000000',
            handleChange: mockChange,
            performValidate: validateBeings
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