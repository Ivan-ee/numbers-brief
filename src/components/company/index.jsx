import {RadioButton} from "../radio-button/index.jsx";
import {useState} from "react";
import {Textarea} from "../textarea/index.jsx";

export function Company() {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');

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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue1 === '2'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_1'}
                                name="company_radio_1"
                                value="1"
                                text="Да"
                                checked={selectedValue1 === '1'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_1'}
                                name="company_radio_1"
                                value="0"
                                text="Нет"
                                checked={selectedValue1 === '0'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'company_textarea_1'}/>
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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue2 === '2'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_2'}
                                name="company_radio_2"
                                value="1"
                                text="Да"
                                checked={selectedValue2 === '1'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_2'}
                                name="company_radio_2"
                                value="0"
                                text="Нет"
                                checked={selectedValue2 === '0'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'company_textarea_1'}/>
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