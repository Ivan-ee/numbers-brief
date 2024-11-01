// eslint-disable-next-line react/prop-types
export function Input({name}) {
    return (
        <input placeholder={'Поля для ответа'} className={'custom-input'} name={name} />
    );
}