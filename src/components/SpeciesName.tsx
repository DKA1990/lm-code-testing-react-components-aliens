import { ChangeEvent } from "react";

export interface SpeciesNameProps {
    speciesName: string;
    changeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, changeSpeciesName }) => {

    const validate = (species: string) : string => {
        if (species.length < 3 || species.length > 23) {
            return 'Species name must be between 3 and 23 characters!';
        }
        if (/^[a-zA-Z]+$/.test(species)) {
            return 'Species name can only contain letters! No numbers or special characters puny human!';
        }
        return '';
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
                    validate(e.target.value);
                    changeSpeciesName(e);
                }}>
            </input>
        </div>
    );
}

export default SpeciesName;