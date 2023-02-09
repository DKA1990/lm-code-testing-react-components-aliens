import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { validateTwoPlusTwo } from '../validate';
import TwoPlusTwo, { TwoPlusTwoProps } from './TwoPlusTwo';

const requiredProps : TwoPlusTwoProps = {
    twoPlusTwo: '4',
    changeTwoPlusTwoValue: () => { }
}

test('renders form element', () => {	
    const { container } = render(<TwoPlusTwo {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('input-container');
});

test('contains correct value when given input', () => {	
    render(<TwoPlusTwo {...requiredProps}/>);
    const twoPlusTwoText = screen.getByDisplayValue('4');
	expect(twoPlusTwoText).toBeInTheDocument();
});

test('renders label', () => {
	render(<TwoPlusTwo {...requiredProps}/>);
	const labelText = screen.getByText('What is 2+2?');
	expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = jest.fn();

    const changeTestProps : TwoPlusTwoProps = {
        twoPlusTwo: '4',
        changeTwoPlusTwoValue: mockChange
    }

	render(<TwoPlusTwo {...changeTestProps}/>);
	const inputField = screen.getByRole('combobox', {name: 'two-plus-two'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.selectOptions(inputField, ('Not 4'));
    }
    expect(mockChange).toHaveBeenCalledTimes(1);
});