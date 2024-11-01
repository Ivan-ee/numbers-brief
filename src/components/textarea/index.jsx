// eslint-disable-next-line react/prop-types
export function Textarea({name, value, onChange}) {
    return (
        <textarea
            className={'custom-textarea regular_18'}
            name={name}
            value={value}
            onChange={onChange}
            placeholder='Поле для ответа'/>
    );
}