import { render } from '@testing-library/react';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

const requiredProps : ErrorMessageProps = {
    errorText: 'Some sort of error'
}

test('renders form element', () => {	
    const { container } = render(<ErrorMessage {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('error-container');
});