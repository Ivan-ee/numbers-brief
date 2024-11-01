// eslint-disable-next-line react/prop-types
export function RadioButton({ id, text, name, value, checked, onChange }) {
    return (
        <label htmlFor={id} className="radiobutton-label">
            <input
                className="radiobutton-input"
                type="radio"
                name={name}
                id={id}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="radiobutton-text regular_18">{text}</span>
        </label>
    );
}