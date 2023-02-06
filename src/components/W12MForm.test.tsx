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

// SHOULD BE HERE?? NEEDS STATE TO BE TESTED OR USEREVENT.TYPE BREAKS. CHECK WITH NEIL!
describe('species name, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render neither error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'species'});
        if (inputField) {
            await userEvent.type(inputField, 'Valid');
        }
        const errorText = screen.queryByText('Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!');
        expect(errorText).not.toBeInTheDocument();
        const errorText2 = screen.queryByText('Species name can only contain letters! No numbers or special characters puny human!');
        expect(errorText2).not.toBeInTheDocument();
    });

	test('when given input containing less than 3 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'species'});
        if (inputField) {
            await userEvent.type(inputField, 'No');
        }
        const errorText = screen.getByText('Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing more than 23 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'species'});
        if (inputField) {
            await userEvent.type(inputField, 'ThistextshouldbreaktheerrormessageasithastomanycharactersalthoughIdidntactuallycountthem');
        }
        const errorText = screen.getByText('Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!');
        expect(errorText).toBeInTheDocument();
    });

	test('when given input containing numbers, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'species'});
        if (inputField) {
            await userEvent.type(inputField, 'Br0k3n');
        }
        const errorText = screen.getByText('Species name can only contain letters! No numbers or special characters puny human!');
        expect(errorText).toBeInTheDocument();
    });
});

describe('planet name, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render neither error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'planet'});
        if (inputField) {
            await userEvent.type(inputField, 'Valid');
        }
        const errorText = screen.queryByText('Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!');
        expect(errorText).not.toBeInTheDocument();
        const errorText2 = screen.queryByText('Planet name can not contain special characters! Feeble fleshbags are testing our patience!');
        expect(errorText2).not.toBeInTheDocument();
    });

	test('when given input containing less than 2 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'planet'});
        if (inputField) {
            await userEvent.type(inputField, 'Y');
        }
        const errorText = screen.getByText('Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing more than 49 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'planet'});
        if (inputField) {
            await userEvent.type(inputField, 'ThistextshouldbreaktheerrormessageasithastomanycharactersalthoughIdidntactuallycountthemandforplanettherewasalargermaxneededsojustincasehereissomemore');
        }
        const errorText = screen.getByText('Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!');
        expect(errorText).toBeInTheDocument();
    });

	test('when given input containing special characters, render correct error message', async () => {
        render(<W12MForm />);
		
        const inputField = screen.getByRole('textbox', {name: 'planet'});
        if (inputField) {
            await userEvent.type(inputField, 'BrokeIt!?');
        }
        const errorText = screen.getByText('Planet name can not contain special characters! Feeble fleshbags are testing our patience!');
        expect(errorText).toBeInTheDocument();
    });
});

describe('number of beings, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render neither error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'beings'});
        if (inputField) {
            await userEvent.type(inputField, '2000000000');
        }
        const errorText = screen.queryByText('Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!');
        expect(errorText).not.toBeInTheDocument();
        const errorText2 = screen.queryByText('Feeble planets contained fewer than 1000000000 beings will be harvested of all matter then destroyed!');
        expect(errorText2).not.toBeInTheDocument();
    });

	test('when given input containing invalid characters (letters), render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'beings'});
        if (inputField) {
            await userEvent.type(inputField, 'Invalid');
        }
        const errorText = screen.getByText('Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing invalid characters (special), render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'beings'});
        if (inputField) {
            await userEvent.type(inputField, '73905?!');
        }
        const errorText = screen.getByText('Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!');
        expect(errorText).toBeInTheDocument();
    });

	test('when given input containing number less than 1000000000, render correct error message', async () => {
        render(<W12MForm />);
		
        const inputField = screen.getByRole('textbox', {name: 'beings'});
        if (inputField) {
            await userEvent.type(inputField, '123');
        }
        const errorText = screen.getByText('Feeble planets contained fewer than 1000000000 beings will be harvested of all matter then destroyed!');
        expect(errorText).toBeInTheDocument();
    });
});

describe('two plus two, when valid and invalid options, correct error messages are displayed', () => {

    test('when given valid option (4), render no error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('combobox', {name: 'two-plus-two'});
        if (inputField) {
            await userEvent.selectOptions(inputField, '4');
        }
        const errorText = screen.queryByText('Lack of basic maths knowledge = OBLITERATION!');
        expect(errorText).not.toBeInTheDocument();
    });

	test('when given input containing invalid option (Not 4), render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('combobox', {name: 'two-plus-two'});
        if (inputField) {
            await userEvent.selectOptions(inputField, 'Not 4');
        }
        const errorText = screen.getByText('Lack of basic maths knowledge = OBLITERATION!');
        expect(errorText).toBeInTheDocument();
    });
});

describe('reasons for sparing, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render no error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'reasons'});
        if (inputField) {
            await userEvent.type(inputField, 'The existence of red pandas is a valid reason to save earth!');
        }
        const errorText = screen.queryByText('Planet name must be between 17 and 153 characters! Plead your case quickly meatsac!');
        expect(errorText).not.toBeInTheDocument();
    });

	test('when given input with fewer than 17 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'reasons'});
        if (inputField) {
            await userEvent.type(inputField, 'Invalid');
        }
        const errorText = screen.getByText('Planet name must be between 17 and 153 characters! Plead your case quickly meatsac!');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing more than 153 characters, render correct error message', async () => {
        render(<W12MForm />);

        const inputField = screen.getByRole('textbox', {name: 'reasons'});
        if (inputField) {
            await userEvent.type(inputField, 'ThistextshouldbreaktheerrormessageasithastomanycharactersalthoughIdidntactuallycountthemandforplanettherewasalargermaxneededsojustincasehereissomemorethereareevenmoreneededtotestthelimitsofthereasonsfieldsoIhaveaddedsomemoregarbagetotheendagain');
        }
        const errorText = screen.getByText('Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!');
        expect(errorText).toBeInTheDocument();
    });
});