
function Button({ onClick, className = '', children }) {
    return (
        <button
            onClick={onClick}
            className={className}
            type="button"
        >
            {children}
        </button>
    )
}
export default Button
/* const Button = ({ onClick, className = '', children }) =>
<button
    onClick={onClick}
    className={className}
    type="button"
>
    {children}
</button> */
