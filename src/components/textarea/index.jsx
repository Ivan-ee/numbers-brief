// eslint-disable-next-line react/prop-types
export function Textarea({name}) {
    return (
        <textarea
            className={'custom-textarea regular_18'}
            name={name}
            placeholder='Поле для ответа'/>
    );
}