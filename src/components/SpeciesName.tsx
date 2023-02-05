import { ChangeEvent } from "react";

interface SpeciesNameProps {
    speciesName: string;
    changeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, changeSpeciesName }) => {

    return (
        <div className="input-container">
            <label htmlFor="species">Species Name: </label>
            <input type="text" id="species" value={speciesName} onChange={changeSpeciesName}></input>
        </div>
    );
}

export default SpeciesName;