import { ChangeEvent } from "react";

interface TwoPlusTwoProps {
    twoPlusTwo: string;
    changeTwoPlusTwoValue: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const TwoPlusTwo : React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, changeTwoPlusTwoValue }) => {

    return (
        <div className="input-container">
            <label htmlFor="two-plus-two">What is 2+2? </label>
            <select id="two-plus-two" value={twoPlusTwo} onChange={changeTwoPlusTwoValue}>
                <option value="4">4</option>
                <option value="not4">Not 4</option>
            </select> 
        </div>
    );
}

export default TwoPlusTwo;