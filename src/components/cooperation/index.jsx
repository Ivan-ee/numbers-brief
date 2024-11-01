import {Title} from "../custom-title/index.jsx";
import {Input} from "../custom-input/index.jsx";

export function Cooperation() {

    return (
        <div className="item tasks">
            <div className="block-title regular_36">
                Условия сотрудничества
            </div>
            <div className="block-content">
                <div className="block-item">
                    <div className="block-description regular_24">
                        Бюджет
                    </div>
                    <div className="block-inputs">
                        <Title name={'от 100 000 ₽ до 150 000 ₽'}/>
                    </div>
                </div>
                <div className="block-item">
                    <div className="block-description regular_24">
                        Желаемая дата завершения
                    </div>
                    <div className="block-inputs">
                        <Input name={'C_input_1'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}