import { validateSpecies, validatePlanet, validateBeings, validateTwoPlusTwo, validateReasons } from './validate';

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

describe('when given a string, validateTwoPlusTwo returns correct error message', () => {
    test('when given string "4", returns no error', () => {
        const errorMessage : string | undefined = validateTwoPlusTwo('4');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "Not 4", returns error', () => {
        const errorMessage : string | undefined = validateTwoPlusTwo('Not 4');
        expect(errorMessage).toBe('Lack of basic maths knowledge = OBLITERATION!');
    });
});

describe('when given a string, validateReasons returns correct error message', () => {
    test('when given string "Some sort of valid reasoning of appropriate length", returns no error', () => {
        const errorMessage : string | undefined = validateReasons('Some sort of valid reasoning of appropriate length');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "Invalid", returns error', () => {
        const errorMessage : string | undefined = validateReasons('Invalid');
        expect(errorMessage).toBe('Planet name must be between 17 and 153 characters! Plead your case quickly meatsac!');
    });
});