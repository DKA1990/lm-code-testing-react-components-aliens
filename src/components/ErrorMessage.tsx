export interface ErrorMessageProps {
    errorText: string | undefined;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({ errorText }) => {
    return (
        <div className="error-container">
            <p>{errorText}</p>
        </div>
    )
}

export default ErrorMessage;