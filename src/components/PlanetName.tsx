import { ChangeEvent } from "react";

export interface PlanetNameProps {
    planetName: string;
    changePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, changePlanetName }) => {

    return (
        <div className="input-container">
            <label htmlFor="planet">Planet Name: </label>
            <input type="text" id="planet" aria-label="planet" value={planetName} onChange={changePlanetName}></input>
        </div>
    );
}

export default PlanetName;