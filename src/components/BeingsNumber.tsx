import { useState, ChangeEvent } from "react";
import { validateBeings } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface BeingsNumberProps {
    beingsNumber: string;
    changeBeingsNumber: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BeingsNumber : React.FC<BeingsNumberProps> = ({ beingsNumber, changeBeingsNumber }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="input-container">
            <label htmlFor="beings">Number of Beings: </label>
            <input 
                type="text" 
                id="beings" 
                aria-label="beings" 
                value={beingsNumber} 
                onChange={(e) => {
                    const errorMessage = validateBeings(e.target.value);
                    setErrorMessage(errorMessage);
                    changeBeingsNumber(e);
                }}>                    
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default BeingsNumber;