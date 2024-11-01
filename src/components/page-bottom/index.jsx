import {BottomInfo} from "../bottom-info/index.jsx";
import emailjs from 'emailjs-com';

export function PageBottom({collectData}) {
    const handleButtonClick = () => {
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

        emailjs.send('service_iw3o8gm', 'template_32zdmmp', templateParams, 'apAJK37Ied8XxixOG')
            .then((response) => {
                console.log('Письмо успешно отправлено!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Не удалось отправить письмо:', error);
            });
    };

    return (
        <>
            <div className="page-bottom">
                <div className="btn regular_24" onClick={handleButtonClick}>Отправить бриф</div>
            </div>
            <BottomInfo/>
        </>
    );
}
