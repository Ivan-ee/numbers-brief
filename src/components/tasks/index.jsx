import {RadioButton} from "../radio-button/index.jsx";
import {useEffect, useState} from "react";
import {Textarea} from "../textarea/index.jsx";
import {Title} from "../custom-title/index.jsx";

export function Tasks({onDataChange}) {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');

    const [textareaValue1, setTextareaValue1] = useState('');
    const [textareaValue2, setTextareaValue2] = useState('');
    const [textareaValue3, setTextareaValue3] = useState('');
    const [textareaValue4, setTextareaValue4] = useState('');

    useEffect(() => {
        onDataChange({
            selectedValue1,
            selectedValue2,
            selectedValue3,
            selectedValue4,
            textareaValue1,
            textareaValue2,
            textareaValue3,
            textareaValue4,
        });
    }, [selectedValue1, selectedValue2, selectedValue3, selectedValue4, textareaValue1, textareaValue2, textareaValue3, textareaValue4, onDataChange]);


    return (
        <div className="item tasks">
            <div className="block-title regular_36">
                Задачи
            </div>
            <div className="block-content">
                <div className="block-item">
                    <div className="block-description regular_24">
                        Услуга
                    </div>
                    <div className="block-inputs">
                        <Title name={'Разработка с нуля'}/>
                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Есть ли у вас представление, какая должна быть структура у сайта?
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'T_My_1'}
                                name="tasks_radio_1"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue1 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_1'}
                                name="tasks_radio_1"
                                value="Да"
                                text="Да"
                                checked={selectedValue1 === 'Да'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_1'}
                                name="tasks_radio_1"
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
                                name={'tasks_textarea_1'}/>
                        </div>
                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Планируются ли прямые продажи на сайте?
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'T_My_2'}
                                name="tasks_radio_2"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue2 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_2'}
                                name="tasks_radio_2"
                                value="Да"
                                text="Да"
                                checked={selectedValue2 === 'Да'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_2'}
                                name="tasks_radio_2"
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
                                name={'tasks_textarea_2'}/>
                        </div>

                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Планируется интеграция со сторонними сервисами? (Например, сервис бронирования и оплаты, CRM и
                        др.)
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'C_My_3'}
                                name="tasks_radio_3"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue3 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_3'}
                                name="tasks_radio_3"
                                value="Да"
                                text="Да"
                                checked={selectedValue3 === 'Да'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_3'}
                                name="tasks_radio_3"
                                value="Нет"
                                text="Нет"
                                checked={selectedValue3 === 'Нет'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea
                                value={textareaValue3}
                                onChange={(e) => setTextareaValue3(e.target.value)}
                                name={'tasks_textarea_3'}/>
                        </div>

                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Есть ли заготовленные тексты для сайта?
                    </div>
                    <div className="block-inputs">
                        <div className="radio">
                            <RadioButton
                                id={'T_My_4'}
                                name="tasks_radio_4"
                                value="Свой ответ"
                                text="Свой ответ"
                                checked={selectedValue4 === 'Свой ответ'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_4'}
                                name="tasks_radio_4"
                                value="Да"
                                text="Да"
                                checked={selectedValue4 === 'Да'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_4'}
                                name="tasks_radio_4"
                                value="Нет"
                                text="Нет"
                                checked={selectedValue4 === 'Нет'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea
                                value={textareaValue4}
                                onChange={(e) => setTextareaValue4(e.target.value)}
                                name={'tasks_textarea_4'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}