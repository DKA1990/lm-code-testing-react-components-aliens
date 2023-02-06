import { ChangeEvent } from "react";

export interface BeingsNumberProps {
    beingsNumber: string;
    changeBeingsNumber: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BeingsNumber : React.FC<BeingsNumberProps> = ({ beingsNumber, changeBeingsNumber }) => {

    return (
        <div className="input-container">
            <label htmlFor="beings">Number of Beings: </label>
            <input type="text" id="beings" aria-label="beings" value={beingsNumber} onChange={changeBeingsNumber}></input>
        </div>
    );
}

export default BeingsNumber;