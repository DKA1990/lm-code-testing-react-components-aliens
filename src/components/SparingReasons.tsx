import { ChangeEvent } from "react";

interface SparingReasonsProps {
    spareReasons: string;
    changeSpareReasons: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const SparingReasons : React.FC<SparingReasonsProps> = ({ spareReasons, changeSpareReasons }) => {

    return (
        <div className="input-container">
            <label htmlFor="reasons">Reason For Sparing: </label>
            <textarea id="reasons" value={spareReasons} onChange={changeSpareReasons}></textarea>
        </div>
    );
}

export default SparingReasons;