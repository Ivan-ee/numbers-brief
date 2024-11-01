import {RadioButton} from "../radio-button/index.jsx";
import {useState} from "react";
import {Textarea} from "../textarea/index.jsx";
import {Title} from "../custom-title/index.jsx";

export function Tasks() {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');

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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue1 === '2'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_1'}
                                name="tasks_radio_1"
                                value="1"
                                text="Да"
                                checked={selectedValue1 === '1'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_1'}
                                name="tasks_radio_1"
                                value="0"
                                text="Нет"
                                checked={selectedValue1 === '0'}
                                onChange={(e) => setSelectedValue1(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'tasks_textarea_1'}/>
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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue2 === '2'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_2'}
                                name="tasks_radio_2"
                                value="1"
                                text="Да"
                                checked={selectedValue2 === '1'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_2'}
                                name="tasks_radio_2"
                                value="0"
                                text="Нет"
                                checked={selectedValue2 === '0'}
                                onChange={(e) => setSelectedValue2(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'tasks_textarea_2'}/>
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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue3 === '2'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                            <RadioButton
                                id={'C_Yes_3'}
                                name="tasks_radio_3"
                                value="1"
                                text="Да"
                                checked={selectedValue3 === '1'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                            <RadioButton
                                id={'C_No_3'}
                                name="tasks_radio_3"
                                value="0"
                                text="Нет"
                                checked={selectedValue3 === '0'}
                                onChange={(e) => setSelectedValue3(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'tasks_textarea_3'}/>
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
                                value="2"
                                text="Свой ответ"
                                checked={selectedValue4 === '2'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                            <RadioButton
                                id={'T_Yes_4'}
                                name="tasks_radio_4"
                                value="1"
                                text="Да"
                                checked={selectedValue4 === '1'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                            <RadioButton
                                id={'T_No_4'}
                                name="tasks_radio_4"
                                value="0"
                                text="Нет"
                                checked={selectedValue4 === '0'}
                                onChange={(e) => setSelectedValue4(e.target.value)}
                            />
                        </div>
                        <div className="textarea">
                            <Textarea name={'tasks_textarea_4'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}