import {BottomInfo} from "../bottom-info/index.jsx";
import emailjs from 'emailjs-com';
import {SuccessModal} from "../Success.jsx";
import ReactLoading from "react-loading";
import {useState} from "react";

export function PageBottom({collectData}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handleButtonClick = async () => {
        const data = collectData();
        const emailTemplate = `
            Бриф от клиента
            Компания и рынок:
            Есть ли у вас фирменный стиль? ${data.company.selectedValue1}
            Комментарий: ${data.company.textareaValue1}
            Есть ли примеры сайтов? ${data.company.selectedValue2}
            Комментарий: ${data.company.textareaValue2}
            
            Задачи:
            Есть ли представление о структуре сайта? ${data.tasks.selectedValue1}
            Комментарий: ${data.tasks.textareaValue1}
            Планируются ли прямые продажи? ${data.tasks.selectedValue2}
            Комментарий: ${data.tasks.textareaValue2}
            Планируется ли интеграция с сервисами? ${data.tasks.selectedValue3}
            Комментарий: ${data.tasks.textareaValue3}
            Есть ли заготовленные тексты? ${data.tasks.selectedValue4}
            Комментарий: ${data.tasks.textareaValue4}
            
            Условия сотрудничества:
            Дата завершения: ${data.cooperation.inputValue}
        `;

        const templateParams = {
            name: 'Ivan',
            message: emailTemplate
        };

        setIsLoading(true);

        try {
            await emailjs.send('service_0a9evak', 'template_qp27qri', templateParams, 'A3dxX0TOi0q78OL62');
            setSuccessModalVisible(true); // Показываем модальное окно
        } catch (error) {
            console.error('Не удалось отправить письмо:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseSuccessModal = () => {
        setSuccessModalVisible(false);
    };

    return (
        <>
            <SuccessModal show={isSuccessModalVisible} onClose={handleCloseSuccessModal} initial={0}/>
            <div className="page-bottom">
                <div className="btn regular_24" onClick={handleButtonClick}>
                    {isLoading ? <ReactLoading type={'bars'} color="#fff" height={24} width={24}/> : 'Отправить бриф'}
                </div>
            </div>
            <BottomInfo/>
        </>
    );
}
