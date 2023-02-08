import { useState, ChangeEvent } from "react";
import { validatePlanet } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps {
    planetName: string;
    changePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, changePlanetName }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="input-container">
            <label htmlFor="planet">Planet Name: </label>
            <input 
                type="text" 
                id="planet" 
                aria-label="planet" 
                value={planetName} 
                onChange={(e) => {
                    const errorMessage = validatePlanet(e.target.value);
                    setErrorMessage(errorMessage);
                    changePlanetName(e);
                }}>
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default PlanetName;