import { useState, ChangeEvent } from "react";
import { validateSpecies } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface SpeciesNameProps {
    speciesName: string;
    changeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, changeSpeciesName }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="input-container">
            <label htmlFor="species">Species Name: </label>
            <input 
                className="input-container__text"
                type="text" 
                id="species" 
                aria-label="species" 
                value={speciesName} 
                onChange={(e) => {
                    const errorMessage = validateSpecies(e.target.value);
                    setErrorMessage(errorMessage);
                    changeSpeciesName(e);
                }}>
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default SpeciesName;