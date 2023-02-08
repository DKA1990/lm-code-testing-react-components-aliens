// Validation methods for all fields

export const validateSpecies = (species: string) : string | undefined => {
    if (species.length < 3 || species.length > 23) {
        return 'Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!';
    }
    if (!/^[a-zA-Z]+$/.test(species)) {
        return 'Species name can only contain letters! No numbers or special characters puny human!';
    }
    return undefined;
}

export const validatePlanet = (planet: string) : string | undefined => {
    if (planet.length < 2 || planet.length > 49) {
        return 'Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!';
    }
    if (!/^[a-zA-Z0-9]+$/.test(planet)) {
        return 'Planet name can not contain special characters! Feeble fleshbags are testing our patience!';
    }
    return undefined;
}

export const validateBeings = (beings: string) : string | undefined => {
    if (!/^[0-9]+$/.test(beings)) {
        return 'Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!';
    }
    if (parseInt(beings) < 1000000000) {
        return 'Feeble planets contained fewer than 1000000000 beings will be harvested of all matter then destroyed!';
    }
    return undefined;
}

export const validateTwoPlusTwo = (answer: string) : string | undefined => {
    if (answer !== '4') {
        return 'Lack of basic maths knowledge = OBLITERATION!';
    }        
    return undefined;
}

export const validateReasons = (reasons: string) : string | undefined => {
    if (reasons.length < 17 || reasons.length > 153) {
        return 'Planet name must be between 17 and 153 characters! Plead your case quickly meatsac!';
    }
    return undefined;
}