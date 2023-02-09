import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateReasons } from '../validate';
import SparingReasons, { SparingReasonsProps } from './SparingReasons';

const requiredProps : SparingReasonsProps = {
    spareReasons: 'Red pandas!',
    changeSpareReasons: () => { }
}

test('renders form element', () => {	
    const { container } = render(<SparingReasons {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('input-container');
});

test('contains correct value when given input', () => {	
    render(<SparingReasons {...requiredProps}/>);
    const reasonsText = screen.getByDisplayValue('Red pandas!');
	expect(reasonsText).toBeInTheDocument();
});

test('renders label', () => {
	render(<SparingReasons {...requiredProps}/>);
	const labelText = screen.getByText('Reason For Sparing:');
	expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = jest.fn();

    const changeTestProps : SparingReasonsProps = {
        spareReasons: 'Red pandas!',
        changeSpareReasons: mockChange
    }

	render(<SparingReasons {...changeTestProps}/>);
	const inputField = screen.getByRole('textbox', {name: 'reasons'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.type(inputField, 'Blargh');
    }
    // Called once for each character
    expect(mockChange).toHaveBeenCalledTimes(6);
});