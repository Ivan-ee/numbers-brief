// eslint-disable-next-line react/prop-types
export function Input({name, value, onChange}) {
    return (
        <input value={value} onChange={onChange} placeholder={'Поля для ответа'} className={'custom-input'} name={name} />
    );
}