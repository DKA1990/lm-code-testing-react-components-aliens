import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface TextInputProps {
    name: string;
    value: string;
    label: string;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
    validate: (input: string) => string | undefined;
}

const TextInput : React.FC<TextInputProps> = ({ name, value, label, change, validate }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const setValues = () => {
        return <>
            <div className="input-container">
                <label className="input-container__label" htmlFor={name}>{label}</label>
                <input 
                    className="input-container__text"
                    type="text" 
                    id={name} 
                    aria-label={name}
                    value={value} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        change(e);
                    }}>
                </input>
                <ErrorMessage errorText={errorMessage} />
            </div>
        </>;
                
    }    

    return (
        <>
            {setValues()}
        </>
    );
}

export default TextInput;