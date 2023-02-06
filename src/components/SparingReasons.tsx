import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface SparingReasonsProps {
    spareReasons: string;
    changeSpareReasons: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const SparingReasons : React.FC<SparingReasonsProps> = ({ spareReasons, changeSpareReasons }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate = (reasons: string) : string | undefined => {
        if (reasons.length < 17 || reasons.length > 153) {
            return 'Planet name must be between 17 and 153 characters! Plead your case quickly meatsac!';
        }
        return undefined;
    }

    return (
        <div className="input-container">
            <label htmlFor="reasons">Reason For Sparing: </label>
            <textarea 
                id="reasons" 
                aria-label="reasons" 
                value={spareReasons} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    changeSpareReasons(e);
                }}>
            </textarea>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default SparingReasons;