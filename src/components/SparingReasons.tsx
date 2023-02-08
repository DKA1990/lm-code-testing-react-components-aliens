import { useState, ChangeEvent } from "react";
import { validateReasons } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface SparingReasonsProps {
    spareReasons: string;
    changeSpareReasons: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const SparingReasons : React.FC<SparingReasonsProps> = ({ spareReasons, changeSpareReasons }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="input-container">
            <label className="input-container__label" htmlFor="reasons">Reason For Sparing: </label>
            <textarea 
                className="input-container__text"
                id="reasons" 
                aria-label="reasons" 
                value={spareReasons} 
                onChange={(e) => {
                    const errorMessage = validateReasons(e.target.value);
                    setErrorMessage(errorMessage);
                    changeSpareReasons(e);
                }}>
            </textarea>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default SparingReasons;