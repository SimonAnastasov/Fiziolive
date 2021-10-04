import Image from 'next/image'

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <Image width="60" height="60" src="/media/logo.png"/>
                <p>Fiziolive</p>
            </div>
            <div className="right">
                <p>Масажи</p>
                <p>За Нас</p>
                <p>Контакт</p>
                <p>Закажи</p>
            </div>
        </div>
    )
}

export default Header
