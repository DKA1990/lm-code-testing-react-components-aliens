import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps {
    planetName: string;
    changePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, changePlanetName }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate = (planet: string) : string | undefined => {
        if (planet.length < 2 || planet.length > 49) {
            return 'Planet name must be between 2 and 49 characters! If you lack the intelligence to comply you will be eliminated!';
        }
        if (!/^[a-zA-Z0-9]+$/.test(planet)) {
            return 'Planet name can not contain special characters! Feeble fleshbags are testing our patience!';
        }
        return undefined;
    }

    return (
        <div className="input-container">
            <label htmlFor="planet">Planet Name: </label>
            <input 
                type="text" 
                id="planet" 
                aria-label="planet" 
                value={planetName} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    changePlanetName(e);
                }}>
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default PlanetName;