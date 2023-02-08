import { useState, ChangeEvent } from "react";
import { validateTwoPlusTwo } from "../validate";
import ErrorMessage from "./ErrorMessage";

export interface TwoPlusTwoProps {
    twoPlusTwo: string;
    changeTwoPlusTwoValue: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const TwoPlusTwo : React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, changeTwoPlusTwoValue }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="input-container">
            <label htmlFor="two-plus-two">What is 2+2? </label>
            <select 
                id="two-plus-two" 
                aria-label="two-plus-two" 
                value={twoPlusTwo} 
                onChange={(e) => {
                    const errorMessage = validateTwoPlusTwo(e.target.value);
                    setErrorMessage(errorMessage);
                    changeTwoPlusTwoValue(e);
                }}>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
            </select>
            <ErrorMessage errorText={errorMessage} />
        </div>
    );
}

export default TwoPlusTwo;