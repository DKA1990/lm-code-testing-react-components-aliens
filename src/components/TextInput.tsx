import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

export interface TextInputProps {
    name: string;
    value: string;
    label: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    performValidate: (input: string) => string | undefined;
}

const TextInput : React.FC<TextInputProps> = ({ name, value, label, handleChange, performValidate }) => {

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
                        const errorMessage = performValidate(e.target.value);
                        setErrorMessage(errorMessage);
                        handleChange(e);
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