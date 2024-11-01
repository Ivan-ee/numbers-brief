import call from '../../assets/call.png'
import email from '../../assets/email.png'
import link from '../../assets/link.png'

export function BottomInfo() {

    return (
        <div className="bottom-info">
            <div className="item">
                <div className="img">
                    <img src={call} alt="call"/>
                </div>
                <div className="text regular_24">
                    <a type='tel' href={'tel:+7 (918) 219-83-07'}>+7 (918) 219-83-07</a>
                </div>
            </div>
            <div className="item">
                <div className="img">
                    <img src={email} alt="email"/>
                </div>
                <div className="text regular_24">
                    <a type='mail' href={'mail:hello@numbers-agency.ru'}> hello@numbers-agency.ru</a>
                </div>
            </div>
            <div className="item">
            <div className="img">
                    <img src={link} alt="link"/>
                </div>
                <div className="text regular_24">
                    <a target={'_blank'} href={'https://numbers-agency.ru/'}>numbers-agency.ru</a>
                </div>
            </div>
        </div>
    )
}