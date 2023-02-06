export interface ErrorMessageProps {
    errorText: string | undefined;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({ errorText }) => {
    return (
        <div className="error-container">
            <label className="error-message">{errorText}</label>
        </div>
    )
}

export default ErrorMessage;