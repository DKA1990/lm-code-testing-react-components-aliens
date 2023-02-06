import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface SpeciesNameProps {
    speciesName: string;
    changeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, changeSpeciesName }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate = (species: string) : string | undefined => {
        if (species.length < 3 || species.length > 23) {
            return 'Species name must be between 3 and 23 characters! OBEY US EARTHLINGS!';
        }
        if (!/^[a-zA-Z]+$/.test(species)) {
            return 'Species name can only contain letters! No numbers or special characters puny human!';
        }
        return undefined;
    }

    return (
        <div className="input-container">
            <label htmlFor="species">Species Name: </label>
            <input 
                type="text" 
                id="species" 
                aria-label="species" 
                value={speciesName} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    changeSpeciesName(e);
                }}>
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default SpeciesName;