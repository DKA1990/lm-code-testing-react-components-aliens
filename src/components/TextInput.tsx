import { useState, ChangeEvent } from "react";
import { validateSpecies, validatePlanet, validateBeings } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface TextInputProps {
    name: string;
    stateName: string;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput : React.FC<TextInputProps> = ({ name, stateName, change }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const setValues = () => {
        let labelText : string = '';
        let ariaText : string = name;
        let retHtml : JSX.Element;
        let validate : (input: string) => string | undefined;
    
        switch(name) {
            case 'species':
                labelText = 'Species Name: ';
                validate = validateSpecies;
                break;
            case 'planet':
                labelText = 'Planet Name: ';
                validate = validatePlanet;
                break;
            case 'beings':
                labelText = 'Number of Beings: ';
                validate = validateBeings;
                break;
        }
        retHtml = 
            <div className="input-container">
                <label className="input-container__label" htmlFor={ariaText}>{labelText}</label>
                <input 
                    className="input-container__text"
                    type="text" 
                    id={ariaText} 
                    aria-label={ariaText}
                    value={stateName} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        change(e);
                    }}>
                </input>
                <ErrorMessage errorText={errorMessage} />
            </div>;

            return retHtml;
    }    

    return (
        <>
            {setValues()}
        </>
    );
}

export default TextInput;