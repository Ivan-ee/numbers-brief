import {BottomInfo} from "../bottom-info/index.jsx";

export function PageBottom({collectData}) {

    const handleButtonClick = () => {
        const data = collectData();
        console.log(data);
    };

    return (
        <>
            <div className="page-bottom">
                <div className="btn regular_24" onClick={handleButtonClick}>Отправить бриф</div>
            </div>
            <BottomInfo/>
        </>

    )
}