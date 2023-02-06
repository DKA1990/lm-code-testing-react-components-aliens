import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm, { W12MFormProps } from './W12MForm';

const requiredProps : W12MFormProps = {
	submitForm: () => { }
}

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm {...requiredProps}/>);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

test('when clicked, submit button calls handle event', async () => {

	const mockSubmit = jest.fn();
	const submitProps : W12MFormProps = {
		submitForm: mockSubmit
	}
	render(<W12MForm {...submitProps}/>);

    const submitButton = screen.getAllByRole('button').find(b => b.textContent === 'Submit');
    expect(submitButton).toBeInTheDocument();

    if (submitButton) {
        await userEvent.click(submitButton);
    }
    // Does not get called as any function given gets overwritten within function. REMIND ME!
    expect(mockSubmit).toHaveBeenCalledTimes(1);
});

