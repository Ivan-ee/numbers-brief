import {RadioButton} from "../radio-button/index.jsx";
import {useEffect, useState} from "react";
import {Textarea} from "../textarea/index.jsx";

export function Company({ onDataChange }) {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [textareaValue1, setTextareaValue1] = useState('');
    const [textareaValue2, setTextareaValue2] = useState('');

    useEffect(() => {
        onDataChange({
            selectedValue1,
            selectedValue2,
            textareaValue1,
            textareaValue2,
        });
    }, [selectedValue1, selectedValue2, textareaValue1, textareaValue2, onDataChange]);


    return (
        <div className="item company">
            <div className="block-title regular_36">
                Компания и рынок
            </div>
            <div className="block-content">
                <div className="block-item">
                    <div className="block-description regular_24">
                        Есть ли у вас фирменный стиль, которому должен соответствовать сайт?
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'C_My_1'}
                                name="company_radio_1"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue1 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_1'}
                                name="company_radio_1"
                                value="Да"
                                text="Да"
                                checked={selectedValue1 === 'Да'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_1'}
                                name="company_radio_1"
                                value="Нет"
                                text="Нет"
                                checked={selectedValue1 === 'Нет'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea
                                value={textareaValue1}
                                onChange={(e) => setTextareaValue1(e.target.value)}
                                name={'company_textarea_1'}/>
                        </div>
                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Есть ли примеры сайтов или другие референсы, как вы бы хотели, чтобы выглядел сайт?
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'C_My_2'}
                                name="company_radio_2"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue2 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_2'}
                                name="company_radio_2"
                                value="Да"
                                text="Да"
                                checked={selectedValue2 === 'Да'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_2'}
                                name="company_radio_2"
                                value="Нет"
                                text="Нет"
                                checked={selectedValue2 === 'Нет'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea
                                value={textareaValue2}
                                onChange={(e) => setTextareaValue2(e.target.value)}
                                name={'company_textarea_1'}/>
                            <div className="textarea-desc regular_18">
                                Можете оставить ссылки на сайты
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}