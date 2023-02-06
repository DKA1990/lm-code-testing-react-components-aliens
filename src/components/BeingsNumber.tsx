import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface BeingsNumberProps {
    beingsNumber: string;
    changeBeingsNumber: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BeingsNumber : React.FC<BeingsNumberProps> = ({ beingsNumber, changeBeingsNumber }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate = (beings: string) : string | undefined => {
        if (!/^[0-9]+$/.test(beings)) {
            return 'Number of beings can only contain numbers! Any species counting with forbidden characters will meets their DEMISE!';
        }
        if (parseInt(beings) < 1000000000) {
            return 'Feeble planets contained fewer than 1000000000 beings will be harvested of all matter then destroyed!';
        }
        return undefined;
    }

    return (
        <div className="input-container">
            <label htmlFor="beings">Number of Beings: </label>
            <input 
                type="text" 
                id="beings" 
                aria-label="beings" 
                value={beingsNumber} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    changeBeingsNumber(e);
                }}>                    
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default BeingsNumber;