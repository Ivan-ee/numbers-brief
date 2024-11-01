import logo from '../../assets/logoN.png';

export function PageTop() {

    return (
        <div className="page-top">
            <div className="top-title">
                <div className="logo">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="name regular_36">
                    Numbers
                </div>
            </div>
            <div className="top-description regular_36">
                Бриф на разработку сайта WellSPA Agency
            </div>
        </div>
    )
}